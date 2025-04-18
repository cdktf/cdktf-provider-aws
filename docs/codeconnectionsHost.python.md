# `codeconnectionsHost` Submodule <a name="`codeconnectionsHost` Submodule" id="@cdktf/provider-aws.codeconnectionsHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeconnectionsHost <a name="CodeconnectionsHost" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host aws_codeconnections_host}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeconnections_host

codeconnectionsHost.CodeconnectionsHost(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  provider_endpoint: str,
  provider_type: str,
  tags: typing.Mapping[str] = None,
  timeouts: CodeconnectionsHostTimeouts = None,
  vpc_configuration: typing.Union[IResolvable, typing.List[CodeconnectionsHostVpcConfiguration]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#name CodeconnectionsHost#name}. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.providerEndpoint">provider_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#provider_endpoint CodeconnectionsHost#provider_endpoint}. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.providerType">provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#provider_type CodeconnectionsHost#provider_type}. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#tags CodeconnectionsHost#tags}. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.vpcConfiguration">vpc_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>]]</code> | vpc_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#name CodeconnectionsHost#name}.

---

##### `provider_endpoint`<sup>Required</sup> <a name="provider_endpoint" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.providerEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#provider_endpoint CodeconnectionsHost#provider_endpoint}.

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.providerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#provider_type CodeconnectionsHost#provider_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#tags CodeconnectionsHost#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#timeouts CodeconnectionsHost#timeouts}

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.Initializer.parameter.vpcConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>]]

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#vpc_configuration CodeconnectionsHost#vpc_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetVpcConfiguration">reset_vpc_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#create CodeconnectionsHost#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#delete CodeconnectionsHost#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#update CodeconnectionsHost#update}

---

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  value: typing.Union[IResolvable, typing.List[CodeconnectionsHostVpcConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.putVpcConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>]]

---

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_configuration` <a name="reset_vpc_configuration" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.resetVpcConfiguration"></a>

```python
def reset_vpc_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CodeconnectionsHost resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codeconnections_host

codeconnectionsHost.CodeconnectionsHost.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codeconnections_host

codeconnectionsHost.CodeconnectionsHost.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codeconnections_host

codeconnectionsHost.CodeconnectionsHost.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import codeconnections_host

codeconnectionsHost.CodeconnectionsHost.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CodeconnectionsHost resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodeconnectionsHost to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodeconnectionsHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodeconnectionsHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference">CodeconnectionsHostTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList">CodeconnectionsHostVpcConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerEndpointInput">provider_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerTypeInput">provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerEndpoint">provider_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.timeouts"></a>

```python
timeouts: CodeconnectionsHostTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference">CodeconnectionsHostTimeoutsOutputReference</a>

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.vpcConfiguration"></a>

```python
vpc_configuration: CodeconnectionsHostVpcConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList">CodeconnectionsHostVpcConfigurationList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_endpoint_input`<sup>Optional</sup> <a name="provider_endpoint_input" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerEndpointInput"></a>

```python
provider_endpoint_input: str
```

- *Type:* str

---

##### `provider_type_input`<sup>Optional</sup> <a name="provider_type_input" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerTypeInput"></a>

```python
provider_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CodeconnectionsHostTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a>]

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: typing.Union[IResolvable, typing.List[CodeconnectionsHostVpcConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_endpoint`<sup>Required</sup> <a name="provider_endpoint" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerEndpoint"></a>

```python
provider_endpoint: str
```

- *Type:* str

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHost.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodeconnectionsHostConfig <a name="CodeconnectionsHostConfig" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeconnections_host

codeconnectionsHost.CodeconnectionsHostConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  provider_endpoint: str,
  provider_type: str,
  tags: typing.Mapping[str] = None,
  timeouts: CodeconnectionsHostTimeouts = None,
  vpc_configuration: typing.Union[IResolvable, typing.List[CodeconnectionsHostVpcConfiguration]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#name CodeconnectionsHost#name}. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.providerEndpoint">provider_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#provider_endpoint CodeconnectionsHost#provider_endpoint}. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.providerType">provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#provider_type CodeconnectionsHost#provider_type}. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#tags CodeconnectionsHost#tags}. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.vpcConfiguration">vpc_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>]]</code> | vpc_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#name CodeconnectionsHost#name}.

---

##### `provider_endpoint`<sup>Required</sup> <a name="provider_endpoint" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.providerEndpoint"></a>

```python
provider_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#provider_endpoint CodeconnectionsHost#provider_endpoint}.

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#provider_type CodeconnectionsHost#provider_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#tags CodeconnectionsHost#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.timeouts"></a>

```python
timeouts: CodeconnectionsHostTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#timeouts CodeconnectionsHost#timeouts}

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostConfig.property.vpcConfiguration"></a>

```python
vpc_configuration: typing.Union[IResolvable, typing.List[CodeconnectionsHostVpcConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>]]

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#vpc_configuration CodeconnectionsHost#vpc_configuration}

---

### CodeconnectionsHostTimeouts <a name="CodeconnectionsHostTimeouts" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeconnections_host

codeconnectionsHost.CodeconnectionsHostTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#create CodeconnectionsHost#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#delete CodeconnectionsHost#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#update CodeconnectionsHost#update}

---

### CodeconnectionsHostVpcConfiguration <a name="CodeconnectionsHostVpcConfiguration" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeconnections_host

codeconnectionsHost.CodeconnectionsHostVpcConfiguration(
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  vpc_id: str,
  tls_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#security_group_ids CodeconnectionsHost#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#subnet_ids CodeconnectionsHost#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#vpc_id CodeconnectionsHost#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.tlsCertificate">tls_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#tls_certificate CodeconnectionsHost#tls_certificate}. |

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#security_group_ids CodeconnectionsHost#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#subnet_ids CodeconnectionsHost#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#vpc_id CodeconnectionsHost#vpc_id}.

---

##### `tls_certificate`<sup>Optional</sup> <a name="tls_certificate" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration.property.tlsCertificate"></a>

```python
tls_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/codeconnections_host#tls_certificate CodeconnectionsHost#tls_certificate}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodeconnectionsHostTimeoutsOutputReference <a name="CodeconnectionsHostTimeoutsOutputReference" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeconnections_host

codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodeconnectionsHostTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostTimeouts">CodeconnectionsHostTimeouts</a>]

---


### CodeconnectionsHostVpcConfigurationList <a name="CodeconnectionsHostVpcConfigurationList" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeconnections_host

codeconnectionsHost.CodeconnectionsHostVpcConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodeconnectionsHostVpcConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodeconnectionsHostVpcConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>]]

---


### CodeconnectionsHostVpcConfigurationOutputReference <a name="CodeconnectionsHostVpcConfigurationOutputReference" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeconnections_host

codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resetTlsCertificate">reset_tls_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tls_certificate` <a name="reset_tls_certificate" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.resetTlsCertificate"></a>

```python
def reset_tls_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.tlsCertificateInput">tls_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.tlsCertificate">tls_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_certificate_input`<sup>Optional</sup> <a name="tls_certificate_input" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.tlsCertificateInput"></a>

```python
tls_certificate_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_certificate`<sup>Required</sup> <a name="tls_certificate" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.tlsCertificate"></a>

```python
tls_certificate: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodeconnectionsHostVpcConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codeconnectionsHost.CodeconnectionsHostVpcConfiguration">CodeconnectionsHostVpcConfiguration</a>]

---



