# `rumAppMonitor` Submodule <a name="`rumAppMonitor` Submodule" id="@cdktf/provider-aws.rumAppMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumAppMonitor <a name="RumAppMonitor" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor aws_rum_app_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rum_app_monitor

rumAppMonitor.RumAppMonitor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  name: str,
  app_monitor_configuration: RumAppMonitorAppMonitorConfiguration = None,
  custom_events: RumAppMonitorCustomEvents = None,
  cw_log_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#domain RumAppMonitor#domain}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#name RumAppMonitor#name}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.appMonitorConfiguration">app_monitor_configuration</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | app_monitor_configuration block. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.customEvents">custom_events</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | custom_events block. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.cwLogEnabled">cw_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#id RumAppMonitor#id}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags RumAppMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags_all RumAppMonitor#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#domain RumAppMonitor#domain}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#name RumAppMonitor#name}.

---

##### `app_monitor_configuration`<sup>Optional</sup> <a name="app_monitor_configuration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.appMonitorConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

app_monitor_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#app_monitor_configuration RumAppMonitor#app_monitor_configuration}

---

##### `custom_events`<sup>Optional</sup> <a name="custom_events" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.customEvents"></a>

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

custom_events block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#custom_events RumAppMonitor#custom_events}

---

##### `cw_log_enabled`<sup>Optional</sup> <a name="cw_log_enabled" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.cwLogEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#id RumAppMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags RumAppMonitor#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags_all RumAppMonitor#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration">put_app_monitor_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putCustomEvents">put_custom_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration">reset_app_monitor_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetCustomEvents">reset_custom_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetCwLogEnabled">reset_cw_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_app_monitor_configuration` <a name="put_app_monitor_configuration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration"></a>

```python
def put_app_monitor_configuration(
  allow_cookies: typing.Union[bool, IResolvable] = None,
  enable_xray: typing.Union[bool, IResolvable] = None,
  excluded_pages: typing.List[str] = None,
  favorite_pages: typing.List[str] = None,
  guest_role_arn: str = None,
  identity_pool_id: str = None,
  included_pages: typing.List[str] = None,
  session_sample_rate: typing.Union[int, float] = None,
  telemetries: typing.List[str] = None
) -> None
```

###### `allow_cookies`<sup>Optional</sup> <a name="allow_cookies" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.allowCookies"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}.

---

###### `enable_xray`<sup>Optional</sup> <a name="enable_xray" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.enableXray"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#enable_xray RumAppMonitor#enable_xray}.

---

###### `excluded_pages`<sup>Optional</sup> <a name="excluded_pages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.excludedPages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}.

---

###### `favorite_pages`<sup>Optional</sup> <a name="favorite_pages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.favoritePages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}.

---

###### `guest_role_arn`<sup>Optional</sup> <a name="guest_role_arn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.guestRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}.

---

###### `identity_pool_id`<sup>Optional</sup> <a name="identity_pool_id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.identityPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}.

---

###### `included_pages`<sup>Optional</sup> <a name="included_pages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.includedPages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#included_pages RumAppMonitor#included_pages}.

---

###### `session_sample_rate`<sup>Optional</sup> <a name="session_sample_rate" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.sessionSampleRate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}.

---

###### `telemetries`<sup>Optional</sup> <a name="telemetries" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.telemetries"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#telemetries RumAppMonitor#telemetries}.

---

##### `put_custom_events` <a name="put_custom_events" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putCustomEvents"></a>

```python
def put_custom_events(
  status: str = None
) -> None
```

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putCustomEvents.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#status RumAppMonitor#status}.

---

##### `reset_app_monitor_configuration` <a name="reset_app_monitor_configuration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration"></a>

```python
def reset_app_monitor_configuration() -> None
```

##### `reset_custom_events` <a name="reset_custom_events" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetCustomEvents"></a>

```python
def reset_custom_events() -> None
```

##### `reset_cw_log_enabled` <a name="reset_cw_log_enabled" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetCwLogEnabled"></a>

```python
def reset_cw_log_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import rum_app_monitor

rumAppMonitor.RumAppMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import rum_app_monitor

rumAppMonitor.RumAppMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import rum_app_monitor

rumAppMonitor.RumAppMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration">app_monitor_configuration</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorId">app_monitor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.customEvents">custom_events</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogGroup">cw_log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput">app_monitor_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.customEventsInput">custom_events_input</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput">cw_log_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogEnabled">cw_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_monitor_configuration`<sup>Required</sup> <a name="app_monitor_configuration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration"></a>

```python
app_monitor_configuration: RumAppMonitorAppMonitorConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a>

---

##### `app_monitor_id`<sup>Required</sup> <a name="app_monitor_id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorId"></a>

```python
app_monitor_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `custom_events`<sup>Required</sup> <a name="custom_events" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.customEvents"></a>

```python
custom_events: RumAppMonitorCustomEventsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a>

---

##### `cw_log_group`<sup>Required</sup> <a name="cw_log_group" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogGroup"></a>

```python
cw_log_group: str
```

- *Type:* str

---

##### `app_monitor_configuration_input`<sup>Optional</sup> <a name="app_monitor_configuration_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput"></a>

```python
app_monitor_configuration_input: RumAppMonitorAppMonitorConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---

##### `custom_events_input`<sup>Optional</sup> <a name="custom_events_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.customEventsInput"></a>

```python
custom_events_input: RumAppMonitorCustomEvents
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---

##### `cw_log_enabled_input`<sup>Optional</sup> <a name="cw_log_enabled_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput"></a>

```python
cw_log_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cw_log_enabled`<sup>Required</sup> <a name="cw_log_enabled" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogEnabled"></a>

```python
cw_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RumAppMonitorAppMonitorConfiguration <a name="RumAppMonitorAppMonitorConfiguration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rum_app_monitor

rumAppMonitor.RumAppMonitorAppMonitorConfiguration(
  allow_cookies: typing.Union[bool, IResolvable] = None,
  enable_xray: typing.Union[bool, IResolvable] = None,
  excluded_pages: typing.List[str] = None,
  favorite_pages: typing.List[str] = None,
  guest_role_arn: str = None,
  identity_pool_id: str = None,
  included_pages: typing.List[str] = None,
  session_sample_rate: typing.Union[int, float] = None,
  telemetries: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies">allow_cookies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXray">enable_xray</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#enable_xray RumAppMonitor#enable_xray}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages">excluded_pages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages">favorite_pages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn">guest_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages">included_pages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#included_pages RumAppMonitor#included_pages}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate">session_sample_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries">telemetries</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#telemetries RumAppMonitor#telemetries}. |

---

##### `allow_cookies`<sup>Optional</sup> <a name="allow_cookies" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies"></a>

```python
allow_cookies: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}.

---

##### `enable_xray`<sup>Optional</sup> <a name="enable_xray" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXray"></a>

```python
enable_xray: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#enable_xray RumAppMonitor#enable_xray}.

---

##### `excluded_pages`<sup>Optional</sup> <a name="excluded_pages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages"></a>

```python
excluded_pages: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}.

---

##### `favorite_pages`<sup>Optional</sup> <a name="favorite_pages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages"></a>

```python
favorite_pages: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}.

---

##### `guest_role_arn`<sup>Optional</sup> <a name="guest_role_arn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn"></a>

```python
guest_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}.

---

##### `identity_pool_id`<sup>Optional</sup> <a name="identity_pool_id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}.

---

##### `included_pages`<sup>Optional</sup> <a name="included_pages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages"></a>

```python
included_pages: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#included_pages RumAppMonitor#included_pages}.

---

##### `session_sample_rate`<sup>Optional</sup> <a name="session_sample_rate" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate"></a>

```python
session_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}.

---

##### `telemetries`<sup>Optional</sup> <a name="telemetries" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries"></a>

```python
telemetries: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#telemetries RumAppMonitor#telemetries}.

---

### RumAppMonitorConfig <a name="RumAppMonitorConfig" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rum_app_monitor

rumAppMonitor.RumAppMonitorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  name: str,
  app_monitor_configuration: RumAppMonitorAppMonitorConfiguration = None,
  custom_events: RumAppMonitorCustomEvents = None,
  cw_log_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#domain RumAppMonitor#domain}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#name RumAppMonitor#name}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration">app_monitor_configuration</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | app_monitor_configuration block. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.customEvents">custom_events</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | custom_events block. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled">cw_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#id RumAppMonitor#id}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags RumAppMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags_all RumAppMonitor#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#domain RumAppMonitor#domain}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#name RumAppMonitor#name}.

---

##### `app_monitor_configuration`<sup>Optional</sup> <a name="app_monitor_configuration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration"></a>

```python
app_monitor_configuration: RumAppMonitorAppMonitorConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

app_monitor_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#app_monitor_configuration RumAppMonitor#app_monitor_configuration}

---

##### `custom_events`<sup>Optional</sup> <a name="custom_events" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.customEvents"></a>

```python
custom_events: RumAppMonitorCustomEvents
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

custom_events block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#custom_events RumAppMonitor#custom_events}

---

##### `cw_log_enabled`<sup>Optional</sup> <a name="cw_log_enabled" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled"></a>

```python
cw_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#id RumAppMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags RumAppMonitor#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags_all RumAppMonitor#tags_all}.

---

### RumAppMonitorCustomEvents <a name="RumAppMonitorCustomEvents" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rum_app_monitor

rumAppMonitor.RumAppMonitorCustomEvents(
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#status RumAppMonitor#status}. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#status RumAppMonitor#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### RumAppMonitorAppMonitorConfigurationOutputReference <a name="RumAppMonitorAppMonitorConfigurationOutputReference" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rum_app_monitor

rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies">reset_allow_cookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXray">reset_enable_xray</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages">reset_excluded_pages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages">reset_favorite_pages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn">reset_guest_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId">reset_identity_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages">reset_included_pages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate">reset_session_sample_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries">reset_telemetries</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_cookies` <a name="reset_allow_cookies" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies"></a>

```python
def reset_allow_cookies() -> None
```

##### `reset_enable_xray` <a name="reset_enable_xray" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXray"></a>

```python
def reset_enable_xray() -> None
```

##### `reset_excluded_pages` <a name="reset_excluded_pages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages"></a>

```python
def reset_excluded_pages() -> None
```

##### `reset_favorite_pages` <a name="reset_favorite_pages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages"></a>

```python
def reset_favorite_pages() -> None
```

##### `reset_guest_role_arn` <a name="reset_guest_role_arn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn"></a>

```python
def reset_guest_role_arn() -> None
```

##### `reset_identity_pool_id` <a name="reset_identity_pool_id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId"></a>

```python
def reset_identity_pool_id() -> None
```

##### `reset_included_pages` <a name="reset_included_pages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages"></a>

```python
def reset_included_pages() -> None
```

##### `reset_session_sample_rate` <a name="reset_session_sample_rate" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate"></a>

```python
def reset_session_sample_rate() -> None
```

##### `reset_telemetries` <a name="reset_telemetries" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries"></a>

```python
def reset_telemetries() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput">allow_cookies_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXrayInput">enable_xray_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput">excluded_pages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput">favorite_pages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput">guest_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput">identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput">included_pages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput">session_sample_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput">telemetries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies">allow_cookies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXray">enable_xray</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages">excluded_pages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages">favorite_pages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn">guest_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages">included_pages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate">session_sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries">telemetries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_cookies_input`<sup>Optional</sup> <a name="allow_cookies_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput"></a>

```python
allow_cookies_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_xray_input`<sup>Optional</sup> <a name="enable_xray_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXrayInput"></a>

```python
enable_xray_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `excluded_pages_input`<sup>Optional</sup> <a name="excluded_pages_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput"></a>

```python
excluded_pages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `favorite_pages_input`<sup>Optional</sup> <a name="favorite_pages_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput"></a>

```python
favorite_pages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `guest_role_arn_input`<sup>Optional</sup> <a name="guest_role_arn_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput"></a>

```python
guest_role_arn_input: str
```

- *Type:* str

---

##### `identity_pool_id_input`<sup>Optional</sup> <a name="identity_pool_id_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput"></a>

```python
identity_pool_id_input: str
```

- *Type:* str

---

##### `included_pages_input`<sup>Optional</sup> <a name="included_pages_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput"></a>

```python
included_pages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `session_sample_rate_input`<sup>Optional</sup> <a name="session_sample_rate_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput"></a>

```python
session_sample_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `telemetries_input`<sup>Optional</sup> <a name="telemetries_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput"></a>

```python
telemetries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_cookies`<sup>Required</sup> <a name="allow_cookies" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies"></a>

```python
allow_cookies: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_xray`<sup>Required</sup> <a name="enable_xray" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXray"></a>

```python
enable_xray: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `excluded_pages`<sup>Required</sup> <a name="excluded_pages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages"></a>

```python
excluded_pages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `favorite_pages`<sup>Required</sup> <a name="favorite_pages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages"></a>

```python
favorite_pages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `guest_role_arn`<sup>Required</sup> <a name="guest_role_arn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn"></a>

```python
guest_role_arn: str
```

- *Type:* str

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `included_pages`<sup>Required</sup> <a name="included_pages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages"></a>

```python
included_pages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `session_sample_rate`<sup>Required</sup> <a name="session_sample_rate" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate"></a>

```python
session_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `telemetries`<sup>Required</sup> <a name="telemetries" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries"></a>

```python
telemetries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: RumAppMonitorAppMonitorConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---


### RumAppMonitorCustomEventsOutputReference <a name="RumAppMonitorCustomEventsOutputReference" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rum_app_monitor

rumAppMonitor.RumAppMonitorCustomEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue"></a>

```python
internal_value: RumAppMonitorCustomEvents
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---



