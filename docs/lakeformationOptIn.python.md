# `lakeformationOptIn` Submodule <a name="`lakeformationOptIn` Submodule" id="@cdktf/provider-aws.lakeformationOptIn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationOptIn <a name="LakeformationOptIn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in aws_lakeformation_opt_in}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptIn(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  condition: typing.Union[IResolvable, typing.List[LakeformationOptInCondition]] = None,
  principal: typing.Union[IResolvable, typing.List[LakeformationOptInPrincipal]] = None,
  region: str = None,
  resource_data: typing.Union[IResolvable, typing.List[LakeformationOptInResourceData]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.condition">condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>]]</code> | condition block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.principal">principal</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>]]</code> | principal block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.resourceData">resource_data</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>]]</code> | resource_data block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.condition"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>]]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#condition LakeformationOptIn#condition}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.principal"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>]]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#principal LakeformationOptIn#principal}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#region LakeformationOptIn#region}

---

##### `resource_data`<sup>Optional</sup> <a name="resource_data" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.resourceData"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>]]

resource_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#resource_data LakeformationOptIn#resource_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putPrincipal">put_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putResourceData">put_resource_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetPrincipal">reset_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetResourceData">reset_resource_data</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putCondition"></a>

```python
def put_condition(
  value: typing.Union[IResolvable, typing.List[LakeformationOptInCondition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putCondition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>]]

---

##### `put_principal` <a name="put_principal" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putPrincipal"></a>

```python
def put_principal(
  value: typing.Union[IResolvable, typing.List[LakeformationOptInPrincipal]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putPrincipal.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>]]

---

##### `put_resource_data` <a name="put_resource_data" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putResourceData"></a>

```python
def put_resource_data(
  value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceData]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putResourceData.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>]]

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetPrincipal"></a>

```python
def reset_principal() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resource_data` <a name="reset_resource_data" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetResourceData"></a>

```python
def reset_resource_data() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LakeformationOptIn resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptIn.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptIn.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptIn.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptIn.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LakeformationOptIn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LakeformationOptIn to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LakeformationOptIn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationOptIn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList">LakeformationOptInConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.principal">principal</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList">LakeformationOptInPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.resourceData">resource_data</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList">LakeformationOptInResourceDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.conditionInput">condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.principalInput">principal_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.resourceDataInput">resource_data_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.condition"></a>

```python
condition: LakeformationOptInConditionList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList">LakeformationOptInConditionList</a>

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.principal"></a>

```python
principal: LakeformationOptInPrincipalList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList">LakeformationOptInPrincipalList</a>

---

##### `resource_data`<sup>Required</sup> <a name="resource_data" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.resourceData"></a>

```python
resource_data: LakeformationOptInResourceDataList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList">LakeformationOptInResourceDataList</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.conditionInput"></a>

```python
condition_input: typing.Union[IResolvable, typing.List[LakeformationOptInCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>]]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.principalInput"></a>

```python
principal_input: typing.Union[IResolvable, typing.List[LakeformationOptInPrincipal]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_data_input`<sup>Optional</sup> <a name="resource_data_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.resourceDataInput"></a>

```python
resource_data_input: typing.Union[IResolvable, typing.List[LakeformationOptInResourceData]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>]]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationOptInCondition <a name="LakeformationOptInCondition" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInCondition()
```


### LakeformationOptInConfig <a name="LakeformationOptInConfig" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  condition: typing.Union[IResolvable, typing.List[LakeformationOptInCondition]] = None,
  principal: typing.Union[IResolvable, typing.List[LakeformationOptInPrincipal]] = None,
  region: str = None,
  resource_data: typing.Union[IResolvable, typing.List[LakeformationOptInResourceData]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.condition">condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>]]</code> | condition block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.principal">principal</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>]]</code> | principal block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.resourceData">resource_data</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>]]</code> | resource_data block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.condition"></a>

```python
condition: typing.Union[IResolvable, typing.List[LakeformationOptInCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>]]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#condition LakeformationOptIn#condition}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.principal"></a>

```python
principal: typing.Union[IResolvable, typing.List[LakeformationOptInPrincipal]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>]]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#principal LakeformationOptIn#principal}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#region LakeformationOptIn#region}

---

##### `resource_data`<sup>Optional</sup> <a name="resource_data" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.resourceData"></a>

```python
resource_data: typing.Union[IResolvable, typing.List[LakeformationOptInResourceData]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>]]

resource_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#resource_data LakeformationOptIn#resource_data}

---

### LakeformationOptInPrincipal <a name="LakeformationOptInPrincipal" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInPrincipal(
  data_lake_principal_identifier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#data_lake_principal_identifier LakeformationOptIn#data_lake_principal_identifier}. |

---

##### `data_lake_principal_identifier`<sup>Required</sup> <a name="data_lake_principal_identifier" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#data_lake_principal_identifier LakeformationOptIn#data_lake_principal_identifier}.

---

### LakeformationOptInResourceData <a name="LakeformationOptInResourceData" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceData(
  catalog: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataCatalog]] = None,
  database: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDatabase]] = None,
  data_cells_filter: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDataCellsFilter]] = None,
  data_location: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDataLocation]] = None,
  lf_tag: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTag]] = None,
  lf_tag_expression: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTagExpression]] = None,
  lf_tag_policy: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTagPolicy]] = None,
  table: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTable]] = None,
  table_with_columns: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTableWithColumns]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.catalog">catalog</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>]]</code> | catalog block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.database">database</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>]]</code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.dataCellsFilter">data_cells_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>]]</code> | data_cells_filter block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.dataLocation">data_location</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>]]</code> | data_location block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.lfTag">lf_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>]]</code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.lfTagExpression">lf_tag_expression</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>]]</code> | lf_tag_expression block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.lfTagPolicy">lf_tag_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>]]</code> | lf_tag_policy block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.table">table</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>]]</code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.tableWithColumns">table_with_columns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>]]</code> | table_with_columns block. |

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.catalog"></a>

```python
catalog: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataCatalog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>]]

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog LakeformationOptIn#catalog}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.database"></a>

```python
database: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDatabase]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>]]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#database LakeformationOptIn#database}

---

##### `data_cells_filter`<sup>Optional</sup> <a name="data_cells_filter" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.dataCellsFilter"></a>

```python
data_cells_filter: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDataCellsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>]]

data_cells_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#data_cells_filter LakeformationOptIn#data_cells_filter}

---

##### `data_location`<sup>Optional</sup> <a name="data_location" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.dataLocation"></a>

```python
data_location: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDataLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>]]

data_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#data_location LakeformationOptIn#data_location}

---

##### `lf_tag`<sup>Optional</sup> <a name="lf_tag" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.lfTag"></a>

```python
lf_tag: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>]]

lf_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#lf_tag LakeformationOptIn#lf_tag}

---

##### `lf_tag_expression`<sup>Optional</sup> <a name="lf_tag_expression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.lfTagExpression"></a>

```python
lf_tag_expression: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTagExpression]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>]]

lf_tag_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#lf_tag_expression LakeformationOptIn#lf_tag_expression}

---

##### `lf_tag_policy`<sup>Optional</sup> <a name="lf_tag_policy" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.lfTagPolicy"></a>

```python
lf_tag_policy: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTagPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>]]

lf_tag_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#lf_tag_policy LakeformationOptIn#lf_tag_policy}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.table"></a>

```python
table: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>]]

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#table LakeformationOptIn#table}

---

##### `table_with_columns`<sup>Optional</sup> <a name="table_with_columns" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.tableWithColumns"></a>

```python
table_with_columns: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTableWithColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>]]

table_with_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#table_with_columns LakeformationOptIn#table_with_columns}

---

### LakeformationOptInResourceDataCatalog <a name="LakeformationOptInResourceDataCatalog" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataCatalog(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#id LakeformationOptIn#id}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#id LakeformationOptIn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LakeformationOptInResourceDataDatabase <a name="LakeformationOptInResourceDataDatabase" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataDatabase(
  name: str,
  catalog_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

### LakeformationOptInResourceDataDataCellsFilter <a name="LakeformationOptInResourceDataDataCellsFilter" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter(
  database_name: str = None,
  name: str = None,
  table_catalog_id: str = None,
  table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.tableCatalogId">table_catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#table_catalog_id LakeformationOptIn#table_catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#table_name LakeformationOptIn#table_name}. |

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}.

---

##### `table_catalog_id`<sup>Optional</sup> <a name="table_catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.tableCatalogId"></a>

```python
table_catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#table_catalog_id LakeformationOptIn#table_catalog_id}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#table_name LakeformationOptIn#table_name}.

---

### LakeformationOptInResourceDataDataLocation <a name="LakeformationOptInResourceDataDataLocation" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataDataLocation(
  resource_arn: str,
  catalog_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#resource_arn LakeformationOptIn#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#resource_arn LakeformationOptIn#resource_arn}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

### LakeformationOptInResourceDataLfTag <a name="LakeformationOptInResourceDataLfTag" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataLfTag(
  key: str,
  value: str,
  catalog_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#key LakeformationOptIn#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#value LakeformationOptIn#value}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#key LakeformationOptIn#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#value LakeformationOptIn#value}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

### LakeformationOptInResourceDataLfTagExpression <a name="LakeformationOptInResourceDataLfTagExpression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression(
  name: str,
  catalog_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

### LakeformationOptInResourceDataLfTagPolicy <a name="LakeformationOptInResourceDataLfTagPolicy" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy(
  resource_type: str,
  catalog_id: str = None,
  expression: typing.List[str] = None,
  expression_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#resource_type LakeformationOptIn#resource_type}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.expression">expression</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#expression LakeformationOptIn#expression}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.expressionName">expression_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#expression_name LakeformationOptIn#expression_name}. |

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#resource_type LakeformationOptIn#resource_type}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.expression"></a>

```python
expression: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#expression LakeformationOptIn#expression}.

---

##### `expression_name`<sup>Optional</sup> <a name="expression_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.expressionName"></a>

```python
expression_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#expression_name LakeformationOptIn#expression_name}.

---

### LakeformationOptInResourceDataTable <a name="LakeformationOptInResourceDataTable" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataTable(
  database_name: str,
  catalog_id: str = None,
  name: str = None,
  wildcard: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.wildcard">wildcard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#wildcard LakeformationOptIn#wildcard}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.wildcard"></a>

```python
wildcard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#wildcard LakeformationOptIn#wildcard}.

---

### LakeformationOptInResourceDataTableWithColumns <a name="LakeformationOptInResourceDataTableWithColumns" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns(
  database_name: str,
  name: str,
  catalog_id: str = None,
  column_names: typing.List[str] = None,
  column_wildcard: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTableWithColumnsColumnWildcard]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#column_names LakeformationOptIn#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.columnWildcard">column_wildcard</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>]]</code> | column_wildcard block. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#column_names LakeformationOptIn#column_names}.

---

##### `column_wildcard`<sup>Optional</sup> <a name="column_wildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.columnWildcard"></a>

```python
column_wildcard: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTableWithColumnsColumnWildcard]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>]]

column_wildcard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#column_wildcard LakeformationOptIn#column_wildcard}

---

### LakeformationOptInResourceDataTableWithColumnsColumnWildcard <a name="LakeformationOptInResourceDataTableWithColumnsColumnWildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard(
  excluded_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard.property.excludedColumnNames">excluded_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#excluded_column_names LakeformationOptIn#excluded_column_names}. |

---

##### `excluded_column_names`<sup>Optional</sup> <a name="excluded_column_names" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard.property.excludedColumnNames"></a>

```python
excluded_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/lakeformation_opt_in#excluded_column_names LakeformationOptIn#excluded_column_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationOptInConditionList <a name="LakeformationOptInConditionList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationOptInConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationOptInCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>]]

---


### LakeformationOptInConditionOutputReference <a name="LakeformationOptInConditionOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationOptInCondition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>]

---


### LakeformationOptInPrincipalList <a name="LakeformationOptInPrincipalList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInPrincipalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationOptInPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationOptInPrincipal]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>]]

---


### LakeformationOptInPrincipalOutputReference <a name="LakeformationOptInPrincipalOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">data_lake_principal_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_lake_principal_identifier_input`<sup>Optional</sup> <a name="data_lake_principal_identifier_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```python
data_lake_principal_identifier_input: str
```

- *Type:* str

---

##### `data_lake_principal_identifier`<sup>Required</sup> <a name="data_lake_principal_identifier" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationOptInPrincipal]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>]

---


### LakeformationOptInResourceDataCatalogList <a name="LakeformationOptInResourceDataCatalogList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataCatalogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationOptInResourceDataCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataCatalog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>]]

---


### LakeformationOptInResourceDataCatalogOutputReference <a name="LakeformationOptInResourceDataCatalogOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationOptInResourceDataCatalog]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>]

---


### LakeformationOptInResourceDataDatabaseList <a name="LakeformationOptInResourceDataDatabaseList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataDatabaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationOptInResourceDataDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDatabase]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>]]

---


### LakeformationOptInResourceDataDatabaseOutputReference <a name="LakeformationOptInResourceDataDatabaseOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationOptInResourceDataDatabase]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>]

---


### LakeformationOptInResourceDataDataCellsFilterList <a name="LakeformationOptInResourceDataDataCellsFilterList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationOptInResourceDataDataCellsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDataCellsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>]]

---


### LakeformationOptInResourceDataDataCellsFilterOutputReference <a name="LakeformationOptInResourceDataDataCellsFilterOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetTableCatalogId">reset_table_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database_name` <a name="reset_database_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_table_catalog_id` <a name="reset_table_catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetTableCatalogId"></a>

```python
def reset_table_catalog_id() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableCatalogIdInput">table_catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableCatalogId">table_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `table_catalog_id_input`<sup>Optional</sup> <a name="table_catalog_id_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableCatalogIdInput"></a>

```python
table_catalog_id_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `table_catalog_id`<sup>Required</sup> <a name="table_catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableCatalogId"></a>

```python
table_catalog_id: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationOptInResourceDataDataCellsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>]

---


### LakeformationOptInResourceDataDataLocationList <a name="LakeformationOptInResourceDataDataLocationList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataDataLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationOptInResourceDataDataLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDataLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>]]

---


### LakeformationOptInResourceDataDataLocationOutputReference <a name="LakeformationOptInResourceDataDataLocationOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationOptInResourceDataDataLocation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>]

---


### LakeformationOptInResourceDataLfTagExpressionList <a name="LakeformationOptInResourceDataLfTagExpressionList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationOptInResourceDataLfTagExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTagExpression]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>]]

---


### LakeformationOptInResourceDataLfTagExpressionOutputReference <a name="LakeformationOptInResourceDataLfTagExpressionOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationOptInResourceDataLfTagExpression]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>]

---


### LakeformationOptInResourceDataLfTagList <a name="LakeformationOptInResourceDataLfTagList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataLfTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationOptInResourceDataLfTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>]]

---


### LakeformationOptInResourceDataLfTagOutputReference <a name="LakeformationOptInResourceDataLfTagOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationOptInResourceDataLfTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>]

---


### LakeformationOptInResourceDataLfTagPolicyList <a name="LakeformationOptInResourceDataLfTagPolicyList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationOptInResourceDataLfTagPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTagPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>]]

---


### LakeformationOptInResourceDataLfTagPolicyOutputReference <a name="LakeformationOptInResourceDataLfTagPolicyOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resetExpressionName">reset_expression_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_expression_name` <a name="reset_expression_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resetExpressionName"></a>

```python
def reset_expression_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expressionInput">expression_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expressionNameInput">expression_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expression">expression</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expressionName">expression_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expressionInput"></a>

```python
expression_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expression_name_input`<sup>Optional</sup> <a name="expression_name_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expressionNameInput"></a>

```python
expression_name_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expression"></a>

```python
expression: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expression_name`<sup>Required</sup> <a name="expression_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expressionName"></a>

```python
expression_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationOptInResourceDataLfTagPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>]

---


### LakeformationOptInResourceDataList <a name="LakeformationOptInResourceDataList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationOptInResourceDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceData]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>]]

---


### LakeformationOptInResourceDataOutputReference <a name="LakeformationOptInResourceDataOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putCatalog">put_catalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDataCellsFilter">put_data_cells_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDataLocation">put_data_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTag">put_lf_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTagExpression">put_lf_tag_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTagPolicy">put_lf_tag_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putTable">put_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putTableWithColumns">put_table_with_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetDataCellsFilter">reset_data_cells_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetDataLocation">reset_data_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetLfTag">reset_lf_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetLfTagExpression">reset_lf_tag_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetLfTagPolicy">reset_lf_tag_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetTableWithColumns">reset_table_with_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_catalog` <a name="put_catalog" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putCatalog"></a>

```python
def put_catalog(
  value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataCatalog]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putCatalog.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>]]

---

##### `put_database` <a name="put_database" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDatabase"></a>

```python
def put_database(
  value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDatabase]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDatabase.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>]]

---

##### `put_data_cells_filter` <a name="put_data_cells_filter" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDataCellsFilter"></a>

```python
def put_data_cells_filter(
  value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDataCellsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDataCellsFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>]]

---

##### `put_data_location` <a name="put_data_location" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDataLocation"></a>

```python
def put_data_location(
  value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDataLocation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDataLocation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>]]

---

##### `put_lf_tag` <a name="put_lf_tag" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTag"></a>

```python
def put_lf_tag(
  value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>]]

---

##### `put_lf_tag_expression` <a name="put_lf_tag_expression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTagExpression"></a>

```python
def put_lf_tag_expression(
  value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTagExpression]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTagExpression.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>]]

---

##### `put_lf_tag_policy` <a name="put_lf_tag_policy" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTagPolicy"></a>

```python
def put_lf_tag_policy(
  value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTagPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTagPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>]]

---

##### `put_table` <a name="put_table" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putTable"></a>

```python
def put_table(
  value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTable]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putTable.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>]]

---

##### `put_table_with_columns` <a name="put_table_with_columns" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putTableWithColumns"></a>

```python
def put_table_with_columns(
  value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTableWithColumns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putTableWithColumns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>]]

---

##### `reset_catalog` <a name="reset_catalog" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_data_cells_filter` <a name="reset_data_cells_filter" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetDataCellsFilter"></a>

```python
def reset_data_cells_filter() -> None
```

##### `reset_data_location` <a name="reset_data_location" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetDataLocation"></a>

```python
def reset_data_location() -> None
```

##### `reset_lf_tag` <a name="reset_lf_tag" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetLfTag"></a>

```python
def reset_lf_tag() -> None
```

##### `reset_lf_tag_expression` <a name="reset_lf_tag_expression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetLfTagExpression"></a>

```python
def reset_lf_tag_expression() -> None
```

##### `reset_lf_tag_policy` <a name="reset_lf_tag_policy" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetLfTagPolicy"></a>

```python
def reset_lf_tag_policy() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_table_with_columns` <a name="reset_table_with_columns" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetTableWithColumns"></a>

```python
def reset_table_with_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList">LakeformationOptInResourceDataCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList">LakeformationOptInResourceDataDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataCellsFilter">data_cells_filter</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList">LakeformationOptInResourceDataDataCellsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataLocation">data_location</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList">LakeformationOptInResourceDataDataLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTag">lf_tag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList">LakeformationOptInResourceDataLfTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagExpression">lf_tag_expression</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList">LakeformationOptInResourceDataLfTagExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagPolicy">lf_tag_policy</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList">LakeformationOptInResourceDataLfTagPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList">LakeformationOptInResourceDataTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.tableWithColumns">table_with_columns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList">LakeformationOptInResourceDataTableWithColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.catalogInput">catalog_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.databaseInput">database_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataCellsFilterInput">data_cells_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataLocationInput">data_location_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagExpressionInput">lf_tag_expression_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagInput">lf_tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagPolicyInput">lf_tag_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.tableInput">table_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.tableWithColumnsInput">table_with_columns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.catalog"></a>

```python
catalog: LakeformationOptInResourceDataCatalogList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList">LakeformationOptInResourceDataCatalogList</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.database"></a>

```python
database: LakeformationOptInResourceDataDatabaseList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList">LakeformationOptInResourceDataDatabaseList</a>

---

##### `data_cells_filter`<sup>Required</sup> <a name="data_cells_filter" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataCellsFilter"></a>

```python
data_cells_filter: LakeformationOptInResourceDataDataCellsFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList">LakeformationOptInResourceDataDataCellsFilterList</a>

---

##### `data_location`<sup>Required</sup> <a name="data_location" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataLocation"></a>

```python
data_location: LakeformationOptInResourceDataDataLocationList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList">LakeformationOptInResourceDataDataLocationList</a>

---

##### `lf_tag`<sup>Required</sup> <a name="lf_tag" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTag"></a>

```python
lf_tag: LakeformationOptInResourceDataLfTagList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList">LakeformationOptInResourceDataLfTagList</a>

---

##### `lf_tag_expression`<sup>Required</sup> <a name="lf_tag_expression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagExpression"></a>

```python
lf_tag_expression: LakeformationOptInResourceDataLfTagExpressionList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList">LakeformationOptInResourceDataLfTagExpressionList</a>

---

##### `lf_tag_policy`<sup>Required</sup> <a name="lf_tag_policy" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagPolicy"></a>

```python
lf_tag_policy: LakeformationOptInResourceDataLfTagPolicyList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList">LakeformationOptInResourceDataLfTagPolicyList</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.table"></a>

```python
table: LakeformationOptInResourceDataTableList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList">LakeformationOptInResourceDataTableList</a>

---

##### `table_with_columns`<sup>Required</sup> <a name="table_with_columns" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.tableWithColumns"></a>

```python
table_with_columns: LakeformationOptInResourceDataTableWithColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList">LakeformationOptInResourceDataTableWithColumnsList</a>

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.catalogInput"></a>

```python
catalog_input: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataCatalog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>]]

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.databaseInput"></a>

```python
database_input: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDatabase]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>]]

---

##### `data_cells_filter_input`<sup>Optional</sup> <a name="data_cells_filter_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataCellsFilterInput"></a>

```python
data_cells_filter_input: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDataCellsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>]]

---

##### `data_location_input`<sup>Optional</sup> <a name="data_location_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataLocationInput"></a>

```python
data_location_input: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataDataLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>]]

---

##### `lf_tag_expression_input`<sup>Optional</sup> <a name="lf_tag_expression_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagExpressionInput"></a>

```python
lf_tag_expression_input: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTagExpression]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>]]

---

##### `lf_tag_input`<sup>Optional</sup> <a name="lf_tag_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagInput"></a>

```python
lf_tag_input: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>]]

---

##### `lf_tag_policy_input`<sup>Optional</sup> <a name="lf_tag_policy_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagPolicyInput"></a>

```python
lf_tag_policy_input: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataLfTagPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>]]

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.tableInput"></a>

```python
table_input: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>]]

---

##### `table_with_columns_input`<sup>Optional</sup> <a name="table_with_columns_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.tableWithColumnsInput"></a>

```python
table_with_columns_input: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTableWithColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationOptInResourceData]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>]

---


### LakeformationOptInResourceDataTableList <a name="LakeformationOptInResourceDataTableList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataTableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationOptInResourceDataTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>]]

---


### LakeformationOptInResourceDataTableOutputReference <a name="LakeformationOptInResourceDataTableOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resetWildcard">reset_wildcard</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_wildcard` <a name="reset_wildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resetWildcard"></a>

```python
def reset_wildcard() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.wildcardInput">wildcard_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.wildcard">wildcard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `wildcard_input`<sup>Optional</sup> <a name="wildcard_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.wildcardInput"></a>

```python
wildcard_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.wildcard"></a>

```python
wildcard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationOptInResourceDataTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>]

---


### LakeformationOptInResourceDataTableWithColumnsColumnWildcardList <a name="LakeformationOptInResourceDataTableWithColumnsColumnWildcardList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTableWithColumnsColumnWildcard]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>]]

---


### LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference <a name="LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames">reset_excluded_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_column_names` <a name="reset_excluded_column_names" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```python
def reset_excluded_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput">excluded_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames">excluded_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_column_names_input`<sup>Optional</sup> <a name="excluded_column_names_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```python
excluded_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_column_names`<sup>Required</sup> <a name="excluded_column_names" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames"></a>

```python
excluded_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationOptInResourceDataTableWithColumnsColumnWildcard]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>]

---


### LakeformationOptInResourceDataTableWithColumnsList <a name="LakeformationOptInResourceDataTableWithColumnsList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationOptInResourceDataTableWithColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTableWithColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>]]

---


### LakeformationOptInResourceDataTableWithColumnsOutputReference <a name="LakeformationOptInResourceDataTableWithColumnsOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_opt_in

lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.putColumnWildcard">put_column_wildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resetColumnNames">reset_column_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resetColumnWildcard">reset_column_wildcard</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_wildcard` <a name="put_column_wildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.putColumnWildcard"></a>

```python
def put_column_wildcard(
  value: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTableWithColumnsColumnWildcard]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.putColumnWildcard.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>]]

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_column_names` <a name="reset_column_names" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resetColumnNames"></a>

```python
def reset_column_names() -> None
```

##### `reset_column_wildcard` <a name="reset_column_wildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resetColumnWildcard"></a>

```python
def reset_column_wildcard() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnWildcard">column_wildcard</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList">LakeformationOptInResourceDataTableWithColumnsColumnWildcardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnNamesInput">column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnWildcardInput">column_wildcard_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_wildcard`<sup>Required</sup> <a name="column_wildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnWildcard"></a>

```python
column_wildcard: LakeformationOptInResourceDataTableWithColumnsColumnWildcardList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList">LakeformationOptInResourceDataTableWithColumnsColumnWildcardList</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `column_names_input`<sup>Optional</sup> <a name="column_names_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnNamesInput"></a>

```python
column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_wildcard_input`<sup>Optional</sup> <a name="column_wildcard_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnWildcardInput"></a>

```python
column_wildcard_input: typing.Union[IResolvable, typing.List[LakeformationOptInResourceDataTableWithColumnsColumnWildcard]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>]]

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationOptInResourceDataTableWithColumns]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>]

---



