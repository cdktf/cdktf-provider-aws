# `appstreamFleetStackAssociation` Submodule <a name="`appstreamFleetStackAssociation` Submodule" id="@cdktf/provider-aws.appstreamFleetStackAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamFleetStackAssociation <a name="AppstreamFleetStackAssociation" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association aws_appstream_fleet_stack_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appstream_fleet_stack_association

appstreamFleetStackAssociation.AppstreamFleetStackAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_name: str,
  stack_name: str,
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.fleetName">fleet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#fleet_name AppstreamFleetStackAssociation#fleet_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.stackName">stack_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#stack_name AppstreamFleetStackAssociation#stack_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#id AppstreamFleetStackAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_name`<sup>Required</sup> <a name="fleet_name" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.fleetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#fleet_name AppstreamFleetStackAssociation#fleet_name}.

---

##### `stack_name`<sup>Required</sup> <a name="stack_name" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.stackName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#stack_name AppstreamFleetStackAssociation#stack_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#id AppstreamFleetStackAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#region AppstreamFleetStackAssociation#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppstreamFleetStackAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appstream_fleet_stack_association

appstreamFleetStackAssociation.AppstreamFleetStackAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appstream_fleet_stack_association

appstreamFleetStackAssociation.AppstreamFleetStackAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appstream_fleet_stack_association

appstreamFleetStackAssociation.AppstreamFleetStackAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import appstream_fleet_stack_association

appstreamFleetStackAssociation.AppstreamFleetStackAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppstreamFleetStackAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppstreamFleetStackAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppstreamFleetStackAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppstreamFleetStackAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.fleetNameInput">fleet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.stackNameInput">stack_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.fleetName">fleet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.stackName">stack_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_name_input`<sup>Optional</sup> <a name="fleet_name_input" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.fleetNameInput"></a>

```python
fleet_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `stack_name_input`<sup>Optional</sup> <a name="stack_name_input" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.stackNameInput"></a>

```python
stack_name_input: str
```

- *Type:* str

---

##### `fleet_name`<sup>Required</sup> <a name="fleet_name" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.fleetName"></a>

```python
fleet_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `stack_name`<sup>Required</sup> <a name="stack_name" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.stackName"></a>

```python
stack_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamFleetStackAssociationConfig <a name="AppstreamFleetStackAssociationConfig" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appstream_fleet_stack_association

appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_name: str,
  stack_name: str,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.fleetName">fleet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#fleet_name AppstreamFleetStackAssociation#fleet_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.stackName">stack_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#stack_name AppstreamFleetStackAssociation#stack_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#id AppstreamFleetStackAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_name`<sup>Required</sup> <a name="fleet_name" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.fleetName"></a>

```python
fleet_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#fleet_name AppstreamFleetStackAssociation#fleet_name}.

---

##### `stack_name`<sup>Required</sup> <a name="stack_name" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.stackName"></a>

```python
stack_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#stack_name AppstreamFleetStackAssociation#stack_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#id AppstreamFleetStackAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appstreamFleetStackAssociation.AppstreamFleetStackAssociationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appstream_fleet_stack_association#region AppstreamFleetStackAssociation#region}

---



