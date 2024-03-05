# `ec2ImageBlockPublicAccess` Submodule <a name="`ec2ImageBlockPublicAccess` Submodule" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ImageBlockPublicAccess <a name="Ec2ImageBlockPublicAccess" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access aws_ec2_image_block_public_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_image_block_public_access

ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  state: str,
  id: str = None,
  timeouts: Ec2ImageBlockPublicAccessTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#state Ec2ImageBlockPublicAccess#state}. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#id Ec2ImageBlockPublicAccess#id}. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#state Ec2ImageBlockPublicAccess#state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#id Ec2ImageBlockPublicAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#timeouts Ec2ImageBlockPublicAccess#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.putTimeouts"></a>

```python
def put_timeouts(
  update: str = None
) -> None
```

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#update Ec2ImageBlockPublicAccess#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Ec2ImageBlockPublicAccess resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_image_block_public_access

ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_image_block_public_access

ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_image_block_public_access

ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ec2_image_block_public_access

ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Ec2ImageBlockPublicAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2ImageBlockPublicAccess to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2ImageBlockPublicAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2ImageBlockPublicAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference">Ec2ImageBlockPublicAccessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.timeouts"></a>

```python
timeouts: Ec2ImageBlockPublicAccessTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference">Ec2ImageBlockPublicAccessTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Ec2ImageBlockPublicAccessTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccess.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ImageBlockPublicAccessConfig <a name="Ec2ImageBlockPublicAccessConfig" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_image_block_public_access

ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  state: str,
  id: str = None,
  timeouts: Ec2ImageBlockPublicAccessTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#state Ec2ImageBlockPublicAccess#state}. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#id Ec2ImageBlockPublicAccess#id}. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#state Ec2ImageBlockPublicAccess#state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#id Ec2ImageBlockPublicAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessConfig.property.timeouts"></a>

```python
timeouts: Ec2ImageBlockPublicAccessTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#timeouts Ec2ImageBlockPublicAccess#timeouts}

---

### Ec2ImageBlockPublicAccessTimeouts <a name="Ec2ImageBlockPublicAccessTimeouts" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_image_block_public_access

ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts(
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#update Ec2ImageBlockPublicAccess#update}. |

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/ec2_image_block_public_access#update Ec2ImageBlockPublicAccess#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ImageBlockPublicAccessTimeoutsOutputReference <a name="Ec2ImageBlockPublicAccessTimeoutsOutputReference" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_image_block_public_access

ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Ec2ImageBlockPublicAccessTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2ImageBlockPublicAccess.Ec2ImageBlockPublicAccessTimeouts">Ec2ImageBlockPublicAccessTimeouts</a>]

---



