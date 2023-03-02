# `pinpointApp` Submodule <a name="`pinpointApp` Submodule" id="@cdktf/provider-aws.pinpointApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApp <a name="PinpointApp" id="@cdktf/provider-aws.pinpointApp.PinpointApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app aws_pinpoint_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_app

pinpointApp.PinpointApp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  campaign_hook: PinpointAppCampaignHook = None,
  id: str = None,
  limits: PinpointAppLimits = None,
  name: str = None,
  name_prefix: str = None,
  quiet_time: PinpointAppQuietTime = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.campaignHook">campaign_hook</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | campaign_hook block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#id PinpointApp#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.limits">limits</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name PinpointApp#name}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name_prefix PinpointApp#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.quietTime">quiet_time</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | quiet_time block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags PinpointApp#tags}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags_all PinpointApp#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `campaign_hook`<sup>Optional</sup> <a name="campaign_hook" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.campaignHook"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

campaign_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#campaign_hook PinpointApp#campaign_hook}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#id PinpointApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.limits"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#limits PinpointApp#limits}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name PinpointApp#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name_prefix PinpointApp#name_prefix}.

---

##### `quiet_time`<sup>Optional</sup> <a name="quiet_time" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.quietTime"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

quiet_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#quiet_time PinpointApp#quiet_time}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags PinpointApp#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags_all PinpointApp#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook">put_campaign_hook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits">put_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.putQuietTime">put_quiet_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetCampaignHook">reset_campaign_hook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetQuietTime">reset_quiet_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pinpointApp.PinpointApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.pinpointApp.PinpointApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.pinpointApp.PinpointApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_campaign_hook` <a name="put_campaign_hook" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook"></a>

```python
def put_campaign_hook(
  lambda_function_name: str = None,
  mode: str = None,
  web_url: str = None
) -> None
```

###### `lambda_function_name`<sup>Optional</sup> <a name="lambda_function_name" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook.parameter.lambdaFunctionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#lambda_function_name PinpointApp#lambda_function_name}.

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#mode PinpointApp#mode}.

---

###### `web_url`<sup>Optional</sup> <a name="web_url" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook.parameter.webUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#web_url PinpointApp#web_url}.

---

##### `put_limits` <a name="put_limits" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits"></a>

```python
def put_limits(
  daily: typing.Union[int, float] = None,
  maximum_duration: typing.Union[int, float] = None,
  messages_per_second: typing.Union[int, float] = None,
  total: typing.Union[int, float] = None
) -> None
```

###### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits.parameter.daily"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#daily PinpointApp#daily}.

---

###### `maximum_duration`<sup>Optional</sup> <a name="maximum_duration" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits.parameter.maximumDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#maximum_duration PinpointApp#maximum_duration}.

---

###### `messages_per_second`<sup>Optional</sup> <a name="messages_per_second" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits.parameter.messagesPerSecond"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#messages_per_second PinpointApp#messages_per_second}.

---

###### `total`<sup>Optional</sup> <a name="total" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits.parameter.total"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#total PinpointApp#total}.

---

##### `put_quiet_time` <a name="put_quiet_time" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putQuietTime"></a>

```python
def put_quiet_time(
  end: str = None,
  start: str = None
) -> None
```

###### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putQuietTime.parameter.end"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#end PinpointApp#end}.

---

###### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putQuietTime.parameter.start"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#start PinpointApp#start}.

---

##### `reset_campaign_hook` <a name="reset_campaign_hook" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetCampaignHook"></a>

```python
def reset_campaign_hook() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_quiet_time` <a name="reset_quiet_time" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetQuietTime"></a>

```python
def reset_quiet_time() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_app

pinpointApp.PinpointApp.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_app

pinpointApp.PinpointApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_app

pinpointApp.PinpointApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHook">campaign_hook</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference">PinpointAppCampaignHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference">PinpointAppLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTime">quiet_time</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference">PinpointAppQuietTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHookInput">campaign_hook_input</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.limitsInput">limits_input</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTimeInput">quiet_time_input</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `campaign_hook`<sup>Required</sup> <a name="campaign_hook" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHook"></a>

```python
campaign_hook: PinpointAppCampaignHookOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference">PinpointAppCampaignHookOutputReference</a>

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.limits"></a>

```python
limits: PinpointAppLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference">PinpointAppLimitsOutputReference</a>

---

##### `quiet_time`<sup>Required</sup> <a name="quiet_time" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTime"></a>

```python
quiet_time: PinpointAppQuietTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference">PinpointAppQuietTimeOutputReference</a>

---

##### `campaign_hook_input`<sup>Optional</sup> <a name="campaign_hook_input" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHookInput"></a>

```python
campaign_hook_input: PinpointAppCampaignHook
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.limitsInput"></a>

```python
limits_input: PinpointAppLimits
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `quiet_time_input`<sup>Optional</sup> <a name="quiet_time_input" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTimeInput"></a>

```python
quiet_time_input: PinpointAppQuietTime
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointAppCampaignHook <a name="PinpointAppCampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_app

pinpointApp.PinpointAppCampaignHook(
  lambda_function_name: str = None,
  mode: str = None,
  web_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.lambdaFunctionName">lambda_function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#lambda_function_name PinpointApp#lambda_function_name}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#mode PinpointApp#mode}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.webUrl">web_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#web_url PinpointApp#web_url}. |

---

##### `lambda_function_name`<sup>Optional</sup> <a name="lambda_function_name" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.lambdaFunctionName"></a>

```python
lambda_function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#lambda_function_name PinpointApp#lambda_function_name}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#mode PinpointApp#mode}.

---

##### `web_url`<sup>Optional</sup> <a name="web_url" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#web_url PinpointApp#web_url}.

---

### PinpointAppConfig <a name="PinpointAppConfig" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_app

pinpointApp.PinpointAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  campaign_hook: PinpointAppCampaignHook = None,
  id: str = None,
  limits: PinpointAppLimits = None,
  name: str = None,
  name_prefix: str = None,
  quiet_time: PinpointAppQuietTime = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.campaignHook">campaign_hook</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | campaign_hook block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#id PinpointApp#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name PinpointApp#name}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name_prefix PinpointApp#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.quietTime">quiet_time</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | quiet_time block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags PinpointApp#tags}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags_all PinpointApp#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `campaign_hook`<sup>Optional</sup> <a name="campaign_hook" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.campaignHook"></a>

```python
campaign_hook: PinpointAppCampaignHook
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

campaign_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#campaign_hook PinpointApp#campaign_hook}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#id PinpointApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.limits"></a>

```python
limits: PinpointAppLimits
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#limits PinpointApp#limits}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name PinpointApp#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name_prefix PinpointApp#name_prefix}.

---

##### `quiet_time`<sup>Optional</sup> <a name="quiet_time" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.quietTime"></a>

```python
quiet_time: PinpointAppQuietTime
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

quiet_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#quiet_time PinpointApp#quiet_time}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags PinpointApp#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags_all PinpointApp#tags_all}.

---

### PinpointAppLimits <a name="PinpointAppLimits" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_app

pinpointApp.PinpointAppLimits(
  daily: typing.Union[int, float] = None,
  maximum_duration: typing.Union[int, float] = None,
  messages_per_second: typing.Union[int, float] = None,
  total: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.daily">daily</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#daily PinpointApp#daily}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.maximumDuration">maximum_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#maximum_duration PinpointApp#maximum_duration}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.messagesPerSecond">messages_per_second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#messages_per_second PinpointApp#messages_per_second}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.total">total</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#total PinpointApp#total}. |

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.daily"></a>

```python
daily: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#daily PinpointApp#daily}.

---

##### `maximum_duration`<sup>Optional</sup> <a name="maximum_duration" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.maximumDuration"></a>

```python
maximum_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#maximum_duration PinpointApp#maximum_duration}.

---

##### `messages_per_second`<sup>Optional</sup> <a name="messages_per_second" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.messagesPerSecond"></a>

```python
messages_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#messages_per_second PinpointApp#messages_per_second}.

---

##### `total`<sup>Optional</sup> <a name="total" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.total"></a>

```python
total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#total PinpointApp#total}.

---

### PinpointAppQuietTime <a name="PinpointAppQuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_app

pinpointApp.PinpointAppQuietTime(
  end: str = None,
  start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.end">end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#end PinpointApp#end}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#start PinpointApp#start}. |

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.end"></a>

```python
end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#end PinpointApp#end}.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#start PinpointApp#start}.

---

## Classes <a name="Classes" id="Classes"></a>

### PinpointAppCampaignHookOutputReference <a name="PinpointAppCampaignHookOutputReference" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_app

pinpointApp.PinpointAppCampaignHookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetLambdaFunctionName">reset_lambda_function_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetWebUrl">reset_web_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambda_function_name` <a name="reset_lambda_function_name" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetLambdaFunctionName"></a>

```python
def reset_lambda_function_name() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_web_url` <a name="reset_web_url" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetWebUrl"></a>

```python
def reset_web_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionNameInput">lambda_function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrlInput">web_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionName">lambda_function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_function_name_input`<sup>Optional</sup> <a name="lambda_function_name_input" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionNameInput"></a>

```python
lambda_function_name_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `web_url_input`<sup>Optional</sup> <a name="web_url_input" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrlInput"></a>

```python
web_url_input: str
```

- *Type:* str

---

##### `lambda_function_name`<sup>Required</sup> <a name="lambda_function_name" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionName"></a>

```python
lambda_function_name: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.internalValue"></a>

```python
internal_value: PinpointAppCampaignHook
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---


### PinpointAppLimitsOutputReference <a name="PinpointAppLimitsOutputReference" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_app

pinpointApp.PinpointAppLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetDaily">reset_daily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMaximumDuration">reset_maximum_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMessagesPerSecond">reset_messages_per_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetTotal">reset_total</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_daily` <a name="reset_daily" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetDaily"></a>

```python
def reset_daily() -> None
```

##### `reset_maximum_duration` <a name="reset_maximum_duration" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMaximumDuration"></a>

```python
def reset_maximum_duration() -> None
```

##### `reset_messages_per_second` <a name="reset_messages_per_second" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMessagesPerSecond"></a>

```python
def reset_messages_per_second() -> None
```

##### `reset_total` <a name="reset_total" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetTotal"></a>

```python
def reset_total() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.dailyInput">daily_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDurationInput">maximum_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecondInput">messages_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.totalInput">total_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.daily">daily</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDuration">maximum_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecond">messages_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.total">total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `daily_input`<sup>Optional</sup> <a name="daily_input" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.dailyInput"></a>

```python
daily_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_duration_input`<sup>Optional</sup> <a name="maximum_duration_input" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDurationInput"></a>

```python
maximum_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `messages_per_second_input`<sup>Optional</sup> <a name="messages_per_second_input" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecondInput"></a>

```python
messages_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_input`<sup>Optional</sup> <a name="total_input" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.totalInput"></a>

```python
total_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.daily"></a>

```python
daily: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_duration`<sup>Required</sup> <a name="maximum_duration" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDuration"></a>

```python
maximum_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `messages_per_second`<sup>Required</sup> <a name="messages_per_second" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecond"></a>

```python
messages_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total`<sup>Required</sup> <a name="total" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.total"></a>

```python
total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.internalValue"></a>

```python
internal_value: PinpointAppLimits
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---


### PinpointAppQuietTimeOutputReference <a name="PinpointAppQuietTimeOutputReference" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_app

pinpointApp.PinpointAppQuietTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetEnd">reset_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetStart">reset_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end` <a name="reset_end" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetEnd"></a>

```python
def reset_end() -> None
```

##### `reset_start` <a name="reset_start" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetStart"></a>

```python
def reset_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.internalValue"></a>

```python
internal_value: PinpointAppQuietTime
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---



