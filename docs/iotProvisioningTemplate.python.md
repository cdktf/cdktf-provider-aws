# `iotProvisioningTemplate` Submodule <a name="`iotProvisioningTemplate` Submodule" id="@cdktf/provider-aws.iotProvisioningTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotProvisioningTemplate <a name="IotProvisioningTemplate" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template aws_iot_provisioning_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  provisioning_role_arn: str,
  template_body: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  pre_provisioning_hook: IotProvisioningTemplatePreProvisioningHook = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#name IotProvisioningTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioningRoleArn">provisioning_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateBody">template_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#description IotProvisioningTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#id IotProvisioningTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.preProvisioningHook">pre_provisioning_hook</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | pre_provisioning_hook block. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags IotProvisioningTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags_all IotProvisioningTemplate#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#name IotProvisioningTemplate#name}.

---

##### `provisioning_role_arn`<sup>Required</sup> <a name="provisioning_role_arn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioningRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}.

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#description IotProvisioningTemplate#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#id IotProvisioningTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pre_provisioning_hook`<sup>Optional</sup> <a name="pre_provisioning_hook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.preProvisioningHook"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

pre_provisioning_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags IotProvisioningTemplate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags_all IotProvisioningTemplate#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook">put_pre_provisioning_hook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetPreProvisioningHook">reset_pre_provisioning_hook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_pre_provisioning_hook` <a name="put_pre_provisioning_hook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook"></a>

```python
def put_pre_provisioning_hook(
  target_arn: str,
  payload_version: str = None
) -> None
```

###### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook.parameter.targetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#target_arn IotProvisioningTemplate#target_arn}.

---

###### `payload_version`<sup>Optional</sup> <a name="payload_version" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook.parameter.payloadVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#payload_version IotProvisioningTemplate#payload_version}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_pre_provisioning_hook` <a name="reset_pre_provisioning_hook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetPreProvisioningHook"></a>

```python
def reset_pre_provisioning_hook() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.defaultVersionId">default_version_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHook">pre_provisioning_hook</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference">IotProvisioningTemplatePreProvisioningHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHookInput">pre_provisioning_hook_input</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArnInput">provisioning_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBodyInput">template_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArn">provisioning_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBody">template_body</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_version_id`<sup>Required</sup> <a name="default_version_id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.defaultVersionId"></a>

```python
default_version_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pre_provisioning_hook`<sup>Required</sup> <a name="pre_provisioning_hook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHook"></a>

```python
pre_provisioning_hook: IotProvisioningTemplatePreProvisioningHookOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference">IotProvisioningTemplatePreProvisioningHookOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pre_provisioning_hook_input`<sup>Optional</sup> <a name="pre_provisioning_hook_input" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHookInput"></a>

```python
pre_provisioning_hook_input: IotProvisioningTemplatePreProvisioningHook
```

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

---

##### `provisioning_role_arn_input`<sup>Optional</sup> <a name="provisioning_role_arn_input" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArnInput"></a>

```python
provisioning_role_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_body_input`<sup>Optional</sup> <a name="template_body_input" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBodyInput"></a>

```python
template_body_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provisioning_role_arn`<sup>Required</sup> <a name="provisioning_role_arn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArn"></a>

```python
provisioning_role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotProvisioningTemplateConfig <a name="IotProvisioningTemplateConfig" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  provisioning_role_arn: str,
  template_body: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  pre_provisioning_hook: IotProvisioningTemplatePreProvisioningHook = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#name IotProvisioningTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioningRoleArn">provisioning_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateBody">template_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#description IotProvisioningTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#id IotProvisioningTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.preProvisioningHook">pre_provisioning_hook</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | pre_provisioning_hook block. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags IotProvisioningTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags_all IotProvisioningTemplate#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#name IotProvisioningTemplate#name}.

---

##### `provisioning_role_arn`<sup>Required</sup> <a name="provisioning_role_arn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioningRoleArn"></a>

```python
provisioning_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}.

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#description IotProvisioningTemplate#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#id IotProvisioningTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pre_provisioning_hook`<sup>Optional</sup> <a name="pre_provisioning_hook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.preProvisioningHook"></a>

```python
pre_provisioning_hook: IotProvisioningTemplatePreProvisioningHook
```

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

pre_provisioning_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags IotProvisioningTemplate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags_all IotProvisioningTemplate#tags_all}.

---

### IotProvisioningTemplatePreProvisioningHook <a name="IotProvisioningTemplatePreProvisioningHook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook(
  target_arn: str,
  payload_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.targetArn">target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#target_arn IotProvisioningTemplate#target_arn}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.payloadVersion">payload_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#payload_version IotProvisioningTemplate#payload_version}. |

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#target_arn IotProvisioningTemplate#target_arn}.

---

##### `payload_version`<sup>Optional</sup> <a name="payload_version" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.payloadVersion"></a>

```python
payload_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#payload_version IotProvisioningTemplate#payload_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotProvisioningTemplatePreProvisioningHookOutputReference <a name="IotProvisioningTemplatePreProvisioningHookOutputReference" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetPayloadVersion">reset_payload_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_payload_version` <a name="reset_payload_version" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetPayloadVersion"></a>

```python
def reset_payload_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersionInput">payload_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArnInput">target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersion">payload_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload_version_input`<sup>Optional</sup> <a name="payload_version_input" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersionInput"></a>

```python
payload_version_input: str
```

- *Type:* str

---

##### `target_arn_input`<sup>Optional</sup> <a name="target_arn_input" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArnInput"></a>

```python
target_arn_input: str
```

- *Type:* str

---

##### `payload_version`<sup>Required</sup> <a name="payload_version" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersion"></a>

```python
payload_version: str
```

- *Type:* str

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.internalValue"></a>

```python
internal_value: IotProvisioningTemplatePreProvisioningHook
```

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

---



