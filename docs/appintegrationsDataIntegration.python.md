# `appintegrationsDataIntegration` Submodule <a name="`appintegrationsDataIntegration` Submodule" id="@cdktf/provider-aws.appintegrationsDataIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsDataIntegration <a name="AppintegrationsDataIntegration" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration aws_appintegrations_data_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kms_key: str,
  name: str,
  schedule_config: AppintegrationsDataIntegrationScheduleConfig,
  source_uri: str,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scheduleConfig">schedule_config</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | schedule_config block. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.sourceUri">source_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#id AppintegrationsDataIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#tags_all AppintegrationsDataIntegration#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.kmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}.

---

##### `schedule_config`<sup>Required</sup> <a name="schedule_config" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scheduleConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

schedule_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#schedule_config AppintegrationsDataIntegration#schedule_config}

---

##### `source_uri`<sup>Required</sup> <a name="source_uri" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.sourceUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#id AppintegrationsDataIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#tags_all AppintegrationsDataIntegration#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig">put_schedule_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_schedule_config` <a name="put_schedule_config" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig"></a>

```python
def put_schedule_config(
  first_execution_from: str,
  object: str,
  schedule_expression: str
) -> None
```

###### `first_execution_from`<sup>Required</sup> <a name="first_execution_from" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig.parameter.firstExecutionFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#first_execution_from AppintegrationsDataIntegration#first_execution_from}.

---

###### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#object AppintegrationsDataIntegration#object}.

---

###### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig.parameter.scheduleExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#schedule_expression AppintegrationsDataIntegration#schedule_expression}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppintegrationsDataIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppintegrationsDataIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppintegrationsDataIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppintegrationsDataIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppintegrationsDataIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfig">schedule_config</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference">AppintegrationsDataIntegrationScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfigInput">schedule_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUriInput">source_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUri">source_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `schedule_config`<sup>Required</sup> <a name="schedule_config" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfig"></a>

```python
schedule_config: AppintegrationsDataIntegrationScheduleConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference">AppintegrationsDataIntegrationScheduleConfigOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedule_config_input`<sup>Optional</sup> <a name="schedule_config_input" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfigInput"></a>

```python
schedule_config_input: AppintegrationsDataIntegrationScheduleConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

---

##### `source_uri_input`<sup>Optional</sup> <a name="source_uri_input" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUriInput"></a>

```python
source_uri_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_uri`<sup>Required</sup> <a name="source_uri" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUri"></a>

```python
source_uri: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsDataIntegrationConfig <a name="AppintegrationsDataIntegrationConfig" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kms_key: str,
  name: str,
  schedule_config: AppintegrationsDataIntegrationScheduleConfig,
  source_uri: str,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.scheduleConfig">schedule_config</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | schedule_config block. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.sourceUri">source_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#id AppintegrationsDataIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#tags_all AppintegrationsDataIntegration#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}.

---

##### `schedule_config`<sup>Required</sup> <a name="schedule_config" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.scheduleConfig"></a>

```python
schedule_config: AppintegrationsDataIntegrationScheduleConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

schedule_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#schedule_config AppintegrationsDataIntegration#schedule_config}

---

##### `source_uri`<sup>Required</sup> <a name="source_uri" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.sourceUri"></a>

```python
source_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#id AppintegrationsDataIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#tags_all AppintegrationsDataIntegration#tags_all}.

---

### AppintegrationsDataIntegrationScheduleConfig <a name="AppintegrationsDataIntegrationScheduleConfig" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig(
  first_execution_from: str,
  object: str,
  schedule_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.firstExecutionFrom">first_execution_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#first_execution_from AppintegrationsDataIntegration#first_execution_from}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#object AppintegrationsDataIntegration#object}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#schedule_expression AppintegrationsDataIntegration#schedule_expression}. |

---

##### `first_execution_from`<sup>Required</sup> <a name="first_execution_from" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.firstExecutionFrom"></a>

```python
first_execution_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#first_execution_from AppintegrationsDataIntegration#first_execution_from}.

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#object AppintegrationsDataIntegration#object}.

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/appintegrations_data_integration#schedule_expression AppintegrationsDataIntegration#schedule_expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsDataIntegrationScheduleConfigOutputReference <a name="AppintegrationsDataIntegrationScheduleConfigOutputReference" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFromInput">first_execution_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom">first_execution_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `first_execution_from_input`<sup>Optional</sup> <a name="first_execution_from_input" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFromInput"></a>

```python
first_execution_from_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `first_execution_from`<sup>Required</sup> <a name="first_execution_from" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom"></a>

```python
first_execution_from: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppintegrationsDataIntegrationScheduleConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

---



