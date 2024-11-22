# `iamUserPoliciesExclusive` Submodule <a name="`iamUserPoliciesExclusive` Submodule" id="@cdktf/provider-aws.iamUserPoliciesExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamUserPoliciesExclusive <a name="IamUserPoliciesExclusive" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/iam_user_policies_exclusive aws_iam_user_policies_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_user_policies_exclusive

iamUserPoliciesExclusive.IamUserPoliciesExclusive(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_names: typing.List[str],
  user_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/iam_user_policies_exclusive#policy_names IamUserPoliciesExclusive#policy_names}. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/iam_user_policies_exclusive#user_name IamUserPoliciesExclusive#user_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_names`<sup>Required</sup> <a name="policy_names" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.policyNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/iam_user_policies_exclusive#policy_names IamUserPoliciesExclusive#policy_names}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/iam_user_policies_exclusive#user_name IamUserPoliciesExclusive#user_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IamUserPoliciesExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import iam_user_policies_exclusive

iamUserPoliciesExclusive.IamUserPoliciesExclusive.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import iam_user_policies_exclusive

iamUserPoliciesExclusive.IamUserPoliciesExclusive.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import iam_user_policies_exclusive

iamUserPoliciesExclusive.IamUserPoliciesExclusive.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import iam_user_policies_exclusive

iamUserPoliciesExclusive.IamUserPoliciesExclusive.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IamUserPoliciesExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamUserPoliciesExclusive to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamUserPoliciesExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/iam_user_policies_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamUserPoliciesExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.policyNamesInput">policy_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_names_input`<sup>Optional</sup> <a name="policy_names_input" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.policyNamesInput"></a>

```python
policy_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `policy_names`<sup>Required</sup> <a name="policy_names" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.policyNames"></a>

```python
policy_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamUserPoliciesExclusiveConfig <a name="IamUserPoliciesExclusiveConfig" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_user_policies_exclusive

iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_names: typing.List[str],
  user_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/iam_user_policies_exclusive#policy_names IamUserPoliciesExclusive#policy_names}. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/iam_user_policies_exclusive#user_name IamUserPoliciesExclusive#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_names`<sup>Required</sup> <a name="policy_names" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.policyNames"></a>

```python
policy_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/iam_user_policies_exclusive#policy_names IamUserPoliciesExclusive#policy_names}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/iam_user_policies_exclusive#user_name IamUserPoliciesExclusive#user_name}.

---



