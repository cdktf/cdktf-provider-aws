# `verifiedpermissionsSchema` Submodule <a name="`verifiedpermissionsSchema` Submodule" id="@cdktf/provider-aws.verifiedpermissionsSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedpermissionsSchema <a name="VerifiedpermissionsSchema" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema aws_verifiedpermissions_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedpermissions_schema

verifiedpermissionsSchema.VerifiedpermissionsSchema(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_store_id: str,
  definition: typing.Union[IResolvable, typing.List[VerifiedpermissionsSchemaDefinition]] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.policyStoreId">policy_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#policy_store_id VerifiedpermissionsSchema#policy_store_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.definition">definition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>]]</code> | definition block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_store_id`<sup>Required</sup> <a name="policy_store_id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.policyStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#policy_store_id VerifiedpermissionsSchema#policy_store_id}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.definition"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>]]

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#definition VerifiedpermissionsSchema#definition}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#region VerifiedpermissionsSchema#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.putDefinition">put_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetDefinition">reset_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_definition` <a name="put_definition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.putDefinition"></a>

```python
def put_definition(
  value: typing.Union[IResolvable, typing.List[VerifiedpermissionsSchemaDefinition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.putDefinition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>]]

---

##### `reset_definition` <a name="reset_definition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetDefinition"></a>

```python
def reset_definition() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VerifiedpermissionsSchema resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import verifiedpermissions_schema

verifiedpermissionsSchema.VerifiedpermissionsSchema.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import verifiedpermissions_schema

verifiedpermissionsSchema.VerifiedpermissionsSchema.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import verifiedpermissions_schema

verifiedpermissionsSchema.VerifiedpermissionsSchema.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import verifiedpermissions_schema

verifiedpermissionsSchema.VerifiedpermissionsSchema.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VerifiedpermissionsSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VerifiedpermissionsSchema to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VerifiedpermissionsSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedpermissionsSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.definition">definition</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList">VerifiedpermissionsSchemaDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.definitionInput">definition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.policyStoreIdInput">policy_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.policyStoreId">policy_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.definition"></a>

```python
definition: VerifiedpermissionsSchemaDefinitionList
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList">VerifiedpermissionsSchemaDefinitionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.definitionInput"></a>

```python
definition_input: typing.Union[IResolvable, typing.List[VerifiedpermissionsSchemaDefinition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>]]

---

##### `policy_store_id_input`<sup>Optional</sup> <a name="policy_store_id_input" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.policyStoreIdInput"></a>

```python
policy_store_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `policy_store_id`<sup>Required</sup> <a name="policy_store_id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.policyStoreId"></a>

```python
policy_store_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchema.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsSchemaConfig <a name="VerifiedpermissionsSchemaConfig" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedpermissions_schema

verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_store_id: str,
  definition: typing.Union[IResolvable, typing.List[VerifiedpermissionsSchemaDefinition]] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.policyStoreId">policy_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#policy_store_id VerifiedpermissionsSchema#policy_store_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.definition">definition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>]]</code> | definition block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_store_id`<sup>Required</sup> <a name="policy_store_id" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.policyStoreId"></a>

```python
policy_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#policy_store_id VerifiedpermissionsSchema#policy_store_id}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.definition"></a>

```python
definition: typing.Union[IResolvable, typing.List[VerifiedpermissionsSchemaDefinition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>]]

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#definition VerifiedpermissionsSchema#definition}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#region VerifiedpermissionsSchema#region}

---

### VerifiedpermissionsSchemaDefinition <a name="VerifiedpermissionsSchemaDefinition" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedpermissions_schema

verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#value VerifiedpermissionsSchema#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/verifiedpermissions_schema#value VerifiedpermissionsSchema#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedpermissionsSchemaDefinitionList <a name="VerifiedpermissionsSchemaDefinitionList" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedpermissions_schema

verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VerifiedpermissionsSchemaDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VerifiedpermissionsSchemaDefinition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>]]

---


### VerifiedpermissionsSchemaDefinitionOutputReference <a name="VerifiedpermissionsSchemaDefinitionOutputReference" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedpermissions_schema

verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VerifiedpermissionsSchemaDefinition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.verifiedpermissionsSchema.VerifiedpermissionsSchemaDefinition">VerifiedpermissionsSchemaDefinition</a>]

---



