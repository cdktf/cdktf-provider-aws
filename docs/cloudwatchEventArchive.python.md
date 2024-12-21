# `cloudwatchEventArchive` Submodule <a name="`cloudwatchEventArchive` Submodule" id="@cdktf/provider-aws.cloudwatchEventArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventArchive <a name="CloudwatchEventArchive" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive aws_cloudwatch_event_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_archive

cloudwatchEventArchive.CloudwatchEventArchive(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_source_arn: str,
  name: str,
  description: str = None,
  event_pattern: str = None,
  id: str = None,
  retention_days: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.eventSourceArn">event_source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#event_source_arn CloudwatchEventArchive#event_source_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#name CloudwatchEventArchive#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#description CloudwatchEventArchive#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.eventPattern">event_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#event_pattern CloudwatchEventArchive#event_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#id CloudwatchEventArchive#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#retention_days CloudwatchEventArchive#retention_days}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_source_arn`<sup>Required</sup> <a name="event_source_arn" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.eventSourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#event_source_arn CloudwatchEventArchive#event_source_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#name CloudwatchEventArchive#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#description CloudwatchEventArchive#description}.

---

##### `event_pattern`<sup>Optional</sup> <a name="event_pattern" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.eventPattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#event_pattern CloudwatchEventArchive#event_pattern}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#id CloudwatchEventArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#retention_days CloudwatchEventArchive#retention_days}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetEventPattern">reset_event_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetRetentionDays">reset_retention_days</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_event_pattern` <a name="reset_event_pattern" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetEventPattern"></a>

```python
def reset_event_pattern() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retention_days` <a name="reset_retention_days" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetRetentionDays"></a>

```python
def reset_retention_days() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudwatchEventArchive resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_archive

cloudwatchEventArchive.CloudwatchEventArchive.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_archive

cloudwatchEventArchive.CloudwatchEventArchive.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_archive

cloudwatchEventArchive.CloudwatchEventArchive.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_archive

cloudwatchEventArchive.CloudwatchEventArchive.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudwatchEventArchive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchEventArchive to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchEventArchive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchEventArchive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventPatternInput">event_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventSourceArnInput">event_source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventPattern">event_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventSourceArn">event_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_pattern_input`<sup>Optional</sup> <a name="event_pattern_input" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventPatternInput"></a>

```python
event_pattern_input: str
```

- *Type:* str

---

##### `event_source_arn_input`<sup>Optional</sup> <a name="event_source_arn_input" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventSourceArnInput"></a>

```python
event_source_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `event_pattern`<sup>Required</sup> <a name="event_pattern" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

---

##### `event_source_arn`<sup>Required</sup> <a name="event_source_arn" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventSourceArn"></a>

```python
event_source_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventArchiveConfig <a name="CloudwatchEventArchiveConfig" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_archive

cloudwatchEventArchive.CloudwatchEventArchiveConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_source_arn: str,
  name: str,
  description: str = None,
  event_pattern: str = None,
  id: str = None,
  retention_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.eventSourceArn">event_source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#event_source_arn CloudwatchEventArchive#event_source_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#name CloudwatchEventArchive#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#description CloudwatchEventArchive#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.eventPattern">event_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#event_pattern CloudwatchEventArchive#event_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#id CloudwatchEventArchive#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#retention_days CloudwatchEventArchive#retention_days}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_source_arn`<sup>Required</sup> <a name="event_source_arn" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.eventSourceArn"></a>

```python
event_source_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#event_source_arn CloudwatchEventArchive#event_source_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#name CloudwatchEventArchive#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#description CloudwatchEventArchive#description}.

---

##### `event_pattern`<sup>Optional</sup> <a name="event_pattern" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#event_pattern CloudwatchEventArchive#event_pattern}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#id CloudwatchEventArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cloudwatch_event_archive#retention_days CloudwatchEventArchive#retention_days}.

---



