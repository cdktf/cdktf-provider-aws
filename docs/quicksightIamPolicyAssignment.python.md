# `quicksightIamPolicyAssignment` Submodule <a name="`quicksightIamPolicyAssignment` Submodule" id="@cdktf/provider-aws.quicksightIamPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightIamPolicyAssignment <a name="QuicksightIamPolicyAssignment" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment aws_quicksight_iam_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_iam_policy_assignment

quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assignment_name: str,
  assignment_status: str,
  aws_account_id: str = None,
  identities: typing.Union[IResolvable, typing.List[QuicksightIamPolicyAssignmentIdentities]] = None,
  namespace: str = None,
  policy_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.assignmentName">assignment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#assignment_name QuicksightIamPolicyAssignment#assignment_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.assignmentStatus">assignment_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#assignment_status QuicksightIamPolicyAssignment#assignment_status}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#aws_account_id QuicksightIamPolicyAssignment#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.identities">identities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>]]</code> | identities block. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#namespace QuicksightIamPolicyAssignment#namespace}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.policyArn">policy_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#policy_arn QuicksightIamPolicyAssignment#policy_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assignment_name`<sup>Required</sup> <a name="assignment_name" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.assignmentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#assignment_name QuicksightIamPolicyAssignment#assignment_name}.

---

##### `assignment_status`<sup>Required</sup> <a name="assignment_status" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.assignmentStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#assignment_status QuicksightIamPolicyAssignment#assignment_status}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#aws_account_id QuicksightIamPolicyAssignment#aws_account_id}.

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.identities"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>]]

identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#identities QuicksightIamPolicyAssignment#identities}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#namespace QuicksightIamPolicyAssignment#namespace}.

---

##### `policy_arn`<sup>Optional</sup> <a name="policy_arn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.policyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#policy_arn QuicksightIamPolicyAssignment#policy_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.putIdentities">put_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetIdentities">reset_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetPolicyArn">reset_policy_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_identities` <a name="put_identities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.putIdentities"></a>

```python
def put_identities(
  value: typing.Union[IResolvable, typing.List[QuicksightIamPolicyAssignmentIdentities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.putIdentities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>]]

---

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_identities` <a name="reset_identities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetIdentities"></a>

```python
def reset_identities() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_policy_arn` <a name="reset_policy_arn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetPolicyArn"></a>

```python
def reset_policy_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a QuicksightIamPolicyAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_iam_policy_assignment

quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_iam_policy_assignment

quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_iam_policy_assignment

quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_iam_policy_assignment

quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a QuicksightIamPolicyAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightIamPolicyAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightIamPolicyAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightIamPolicyAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentId">assignment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.identities">identities</a></code> | <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList">QuicksightIamPolicyAssignmentIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentNameInput">assignment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentStatusInput">assignment_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.identitiesInput">identities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.policyArnInput">policy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentName">assignment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentStatus">assignment_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assignment_id`<sup>Required</sup> <a name="assignment_id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentId"></a>

```python
assignment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.identities"></a>

```python
identities: QuicksightIamPolicyAssignmentIdentitiesList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList">QuicksightIamPolicyAssignmentIdentitiesList</a>

---

##### `assignment_name_input`<sup>Optional</sup> <a name="assignment_name_input" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentNameInput"></a>

```python
assignment_name_input: str
```

- *Type:* str

---

##### `assignment_status_input`<sup>Optional</sup> <a name="assignment_status_input" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentStatusInput"></a>

```python
assignment_status_input: str
```

- *Type:* str

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `identities_input`<sup>Optional</sup> <a name="identities_input" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.identitiesInput"></a>

```python
identities_input: typing.Union[IResolvable, typing.List[QuicksightIamPolicyAssignmentIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>]]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `policy_arn_input`<sup>Optional</sup> <a name="policy_arn_input" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.policyArnInput"></a>

```python
policy_arn_input: str
```

- *Type:* str

---

##### `assignment_name`<sup>Required</sup> <a name="assignment_name" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentName"></a>

```python
assignment_name: str
```

- *Type:* str

---

##### `assignment_status`<sup>Required</sup> <a name="assignment_status" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentStatus"></a>

```python
assignment_status: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightIamPolicyAssignmentConfig <a name="QuicksightIamPolicyAssignmentConfig" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_iam_policy_assignment

quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assignment_name: str,
  assignment_status: str,
  aws_account_id: str = None,
  identities: typing.Union[IResolvable, typing.List[QuicksightIamPolicyAssignmentIdentities]] = None,
  namespace: str = None,
  policy_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.assignmentName">assignment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#assignment_name QuicksightIamPolicyAssignment#assignment_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.assignmentStatus">assignment_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#assignment_status QuicksightIamPolicyAssignment#assignment_status}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#aws_account_id QuicksightIamPolicyAssignment#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.identities">identities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>]]</code> | identities block. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#namespace QuicksightIamPolicyAssignment#namespace}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.policyArn">policy_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#policy_arn QuicksightIamPolicyAssignment#policy_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assignment_name`<sup>Required</sup> <a name="assignment_name" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.assignmentName"></a>

```python
assignment_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#assignment_name QuicksightIamPolicyAssignment#assignment_name}.

---

##### `assignment_status`<sup>Required</sup> <a name="assignment_status" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.assignmentStatus"></a>

```python
assignment_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#assignment_status QuicksightIamPolicyAssignment#assignment_status}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#aws_account_id QuicksightIamPolicyAssignment#aws_account_id}.

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.identities"></a>

```python
identities: typing.Union[IResolvable, typing.List[QuicksightIamPolicyAssignmentIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>]]

identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#identities QuicksightIamPolicyAssignment#identities}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#namespace QuicksightIamPolicyAssignment#namespace}.

---

##### `policy_arn`<sup>Optional</sup> <a name="policy_arn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#policy_arn QuicksightIamPolicyAssignment#policy_arn}.

---

### QuicksightIamPolicyAssignmentIdentities <a name="QuicksightIamPolicyAssignmentIdentities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_iam_policy_assignment

quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities(
  group: typing.List[str] = None,
  user: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.property.group">group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#group QuicksightIamPolicyAssignment#group}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.property.user">user</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#user QuicksightIamPolicyAssignment#user}. |

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#group QuicksightIamPolicyAssignment#group}.

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.property.user"></a>

```python
user: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_iam_policy_assignment#user QuicksightIamPolicyAssignment#user}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightIamPolicyAssignmentIdentitiesList <a name="QuicksightIamPolicyAssignmentIdentitiesList" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_iam_policy_assignment

quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightIamPolicyAssignmentIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[QuicksightIamPolicyAssignmentIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>]]

---


### QuicksightIamPolicyAssignmentIdentitiesOutputReference <a name="QuicksightIamPolicyAssignmentIdentitiesOutputReference" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_iam_policy_assignment

quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group` <a name="reset_group" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.groupInput">group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.userInput">user_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.group">group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.user">user</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.groupInput"></a>

```python
group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.userInput"></a>

```python
user_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.user"></a>

```python
user: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QuicksightIamPolicyAssignmentIdentities]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>]

---



