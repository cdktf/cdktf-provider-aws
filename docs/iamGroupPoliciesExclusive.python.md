# `iamGroupPoliciesExclusive` Submodule <a name="`iamGroupPoliciesExclusive` Submodule" id="@cdktf/provider-aws.iamGroupPoliciesExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamGroupPoliciesExclusive <a name="IamGroupPoliciesExclusive" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/iam_group_policies_exclusive aws_iam_group_policies_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_group_policies_exclusive

iamGroupPoliciesExclusive.IamGroupPoliciesExclusive(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_name: str,
  policy_names: typing.List[str]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/iam_group_policies_exclusive#group_name IamGroupPoliciesExclusive#group_name}. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/iam_group_policies_exclusive#policy_names IamGroupPoliciesExclusive#policy_names}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.groupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/iam_group_policies_exclusive#group_name IamGroupPoliciesExclusive#group_name}.

---

##### `policy_names`<sup>Required</sup> <a name="policy_names" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.policyNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/iam_group_policies_exclusive#policy_names IamGroupPoliciesExclusive#policy_names}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IamGroupPoliciesExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import iam_group_policies_exclusive

iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import iam_group_policies_exclusive

iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import iam_group_policies_exclusive

iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import iam_group_policies_exclusive

iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IamGroupPoliciesExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamGroupPoliciesExclusive to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamGroupPoliciesExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/iam_group_policies_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamGroupPoliciesExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.policyNamesInput">policy_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `policy_names_input`<sup>Optional</sup> <a name="policy_names_input" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.policyNamesInput"></a>

```python
policy_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `policy_names`<sup>Required</sup> <a name="policy_names" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.policyNames"></a>

```python
policy_names: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamGroupPoliciesExclusiveConfig <a name="IamGroupPoliciesExclusiveConfig" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_group_policies_exclusive

iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_name: str,
  policy_names: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/iam_group_policies_exclusive#group_name IamGroupPoliciesExclusive#group_name}. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/iam_group_policies_exclusive#policy_names IamGroupPoliciesExclusive#policy_names}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/iam_group_policies_exclusive#group_name IamGroupPoliciesExclusive#group_name}.

---

##### `policy_names`<sup>Required</sup> <a name="policy_names" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.policyNames"></a>

```python
policy_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/iam_group_policies_exclusive#policy_names IamGroupPoliciesExclusive#policy_names}.

---



