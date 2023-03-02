# `evidentlyProject` Submodule <a name="`evidentlyProject` Submodule" id="@cdktf/provider-aws.evidentlyProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyProject <a name="EvidentlyProject" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/evidently_project aws_evidently_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_project

evidentlyProject.EvidentlyProject(
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
  data_delivery: EvidentlyProjectDataDelivery = None,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EvidentlyProjectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#name EvidentlyProject#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.dataDelivery">data_delivery</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | data_delivery block. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#description EvidentlyProject#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#id EvidentlyProject#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags EvidentlyProject#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags_all EvidentlyProject#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#name EvidentlyProject#name}.

---

##### `data_delivery`<sup>Optional</sup> <a name="data_delivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.dataDelivery"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

data_delivery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#data_delivery EvidentlyProject#data_delivery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#description EvidentlyProject#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#id EvidentlyProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags EvidentlyProject#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags_all EvidentlyProject#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#timeouts EvidentlyProject#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putDataDelivery">put_data_delivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetDataDelivery">reset_data_delivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_data_delivery` <a name="put_data_delivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putDataDelivery"></a>

```python
def put_data_delivery(
  cloudwatch_logs: EvidentlyProjectDataDeliveryCloudwatchLogs = None,
  s3_destination: EvidentlyProjectDataDeliveryS3Destination = None
) -> None
```

###### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putDataDelivery.parameter.cloudwatchLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#cloudwatch_logs EvidentlyProject#cloudwatch_logs}

---

###### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putDataDelivery.parameter.s3Destination"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#s3_destination EvidentlyProject#s3_destination}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#create EvidentlyProject#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#delete EvidentlyProject#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#update EvidentlyProject#update}.

---

##### `reset_data_delivery` <a name="reset_data_delivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetDataDelivery"></a>

```python
def reset_data_delivery() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import evidently_project

evidentlyProject.EvidentlyProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import evidently_project

evidentlyProject.EvidentlyProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import evidently_project

evidentlyProject.EvidentlyProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.activeExperimentCount">active_experiment_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.activeLaunchCount">active_launch_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dataDelivery">data_delivery</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference">EvidentlyProjectDataDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.experimentCount">experiment_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.featureCount">feature_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.launchCount">launch_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference">EvidentlyProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dataDeliveryInput">data_delivery_input</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active_experiment_count`<sup>Required</sup> <a name="active_experiment_count" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.activeExperimentCount"></a>

```python
active_experiment_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active_launch_count`<sup>Required</sup> <a name="active_launch_count" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.activeLaunchCount"></a>

```python
active_launch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `data_delivery`<sup>Required</sup> <a name="data_delivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dataDelivery"></a>

```python
data_delivery: EvidentlyProjectDataDeliveryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference">EvidentlyProjectDataDeliveryOutputReference</a>

---

##### `experiment_count`<sup>Required</sup> <a name="experiment_count" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.experimentCount"></a>

```python
experiment_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `feature_count`<sup>Required</sup> <a name="feature_count" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.featureCount"></a>

```python
feature_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `launch_count`<sup>Required</sup> <a name="launch_count" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.launchCount"></a>

```python
launch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.timeouts"></a>

```python
timeouts: EvidentlyProjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference">EvidentlyProjectTimeoutsOutputReference</a>

---

##### `data_delivery_input`<sup>Optional</sup> <a name="data_delivery_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dataDeliveryInput"></a>

```python
data_delivery_input: EvidentlyProjectDataDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[EvidentlyProjectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyProjectConfig <a name="EvidentlyProjectConfig" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_project

evidentlyProject.EvidentlyProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  data_delivery: EvidentlyProjectDataDelivery = None,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EvidentlyProjectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#name EvidentlyProject#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.dataDelivery">data_delivery</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | data_delivery block. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#description EvidentlyProject#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#id EvidentlyProject#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags EvidentlyProject#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags_all EvidentlyProject#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#name EvidentlyProject#name}.

---

##### `data_delivery`<sup>Optional</sup> <a name="data_delivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.dataDelivery"></a>

```python
data_delivery: EvidentlyProjectDataDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

data_delivery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#data_delivery EvidentlyProject#data_delivery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#description EvidentlyProject#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#id EvidentlyProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags EvidentlyProject#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags_all EvidentlyProject#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.timeouts"></a>

```python
timeouts: EvidentlyProjectTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#timeouts EvidentlyProject#timeouts}

---

### EvidentlyProjectDataDelivery <a name="EvidentlyProjectDataDelivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_project

evidentlyProject.EvidentlyProjectDataDelivery(
  cloudwatch_logs: EvidentlyProjectDataDeliveryCloudwatchLogs = None,
  s3_destination: EvidentlyProjectDataDeliveryS3Destination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a></code> | s3_destination block. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: EvidentlyProjectDataDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#cloudwatch_logs EvidentlyProject#cloudwatch_logs}

---

##### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.property.s3Destination"></a>

```python
s3_destination: EvidentlyProjectDataDeliveryS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#s3_destination EvidentlyProject#s3_destination}

---

### EvidentlyProjectDataDeliveryCloudwatchLogs <a name="EvidentlyProjectDataDeliveryCloudwatchLogs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_project

evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs(
  log_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs.property.logGroup">log_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#log_group EvidentlyProject#log_group}. |

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#log_group EvidentlyProject#log_group}.

---

### EvidentlyProjectDataDeliveryS3Destination <a name="EvidentlyProjectDataDeliveryS3Destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_project

evidentlyProject.EvidentlyProjectDataDeliveryS3Destination(
  bucket: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#bucket EvidentlyProject#bucket}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#prefix EvidentlyProject#prefix}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#bucket EvidentlyProject#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#prefix EvidentlyProject#prefix}.

---

### EvidentlyProjectTimeouts <a name="EvidentlyProjectTimeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_project

evidentlyProject.EvidentlyProjectTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#create EvidentlyProject#create}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#delete EvidentlyProject#delete}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#update EvidentlyProject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#create EvidentlyProject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#delete EvidentlyProject#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#update EvidentlyProject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference <a name="EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_project

evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group` <a name="reset_log_group" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: EvidentlyProjectDataDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a>

---


### EvidentlyProjectDataDeliveryOutputReference <a name="EvidentlyProjectDataDeliveryOutputReference" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_project

evidentlyProject.EvidentlyProjectDataDeliveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3Destination">put_s3_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetS3Destination">reset_s3_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  log_group: str = None
) -> None
```

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putCloudwatchLogs.parameter.logGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#log_group EvidentlyProject#log_group}.

---

##### `put_s3_destination` <a name="put_s3_destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3Destination"></a>

```python
def put_s3_destination(
  bucket: str = None,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3Destination.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#bucket EvidentlyProject#bucket}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3Destination.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#prefix EvidentlyProject#prefix}.

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```

##### `reset_s3_destination` <a name="reset_s3_destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetS3Destination"></a>

```python
def reset_s3_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference">EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference">EvidentlyProjectDataDeliveryS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3DestinationInput">s3_destination_input</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference">EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference</a>

---

##### `s3_destination`<sup>Required</sup> <a name="s3_destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3Destination"></a>

```python
s3_destination: EvidentlyProjectDataDeliveryS3DestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference">EvidentlyProjectDataDeliveryS3DestinationOutputReference</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: EvidentlyProjectDataDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a>

---

##### `s3_destination_input`<sup>Optional</sup> <a name="s3_destination_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3DestinationInput"></a>

```python
s3_destination_input: EvidentlyProjectDataDeliveryS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.internalValue"></a>

```python
internal_value: EvidentlyProjectDataDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

---


### EvidentlyProjectDataDeliveryS3DestinationOutputReference <a name="EvidentlyProjectDataDeliveryS3DestinationOutputReference" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_project

evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.internalValue"></a>

```python
internal_value: EvidentlyProjectDataDeliveryS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a>

---


### EvidentlyProjectTimeoutsOutputReference <a name="EvidentlyProjectTimeoutsOutputReference" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_project

evidentlyProject.EvidentlyProjectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EvidentlyProjectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a>, cdktf.IResolvable]

---



