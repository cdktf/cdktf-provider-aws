# `eksAccessPolicyAssociation` Submodule <a name="`eksAccessPolicyAssociation` Submodule" id="@cdktf/provider-aws.eksAccessPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksAccessPolicyAssociation <a name="EksAccessPolicyAssociation" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association aws_eks_access_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_access_policy_association

eksAccessPolicyAssociation.EksAccessPolicyAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_scope: EksAccessPolicyAssociationAccessScope,
  cluster_name: str,
  policy_arn: str,
  principal_arn: str,
  id: str = None,
  timeouts: EksAccessPolicyAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.accessScope">access_scope</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a></code> | access_scope block. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#cluster_name EksAccessPolicyAssociation#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.policyArn">policy_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#policy_arn EksAccessPolicyAssociation#policy_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.principalArn">principal_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#principal_arn EksAccessPolicyAssociation#principal_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#id EksAccessPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_scope`<sup>Required</sup> <a name="access_scope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.accessScope"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a>

access_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#access_scope EksAccessPolicyAssociation#access_scope}

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#cluster_name EksAccessPolicyAssociation#cluster_name}.

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.policyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#policy_arn EksAccessPolicyAssociation#policy_arn}.

---

##### `principal_arn`<sup>Required</sup> <a name="principal_arn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.principalArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#principal_arn EksAccessPolicyAssociation#principal_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#id EksAccessPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#timeouts EksAccessPolicyAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putAccessScope">put_access_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_scope` <a name="put_access_scope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putAccessScope"></a>

```python
def put_access_scope(
  type: str,
  namespaces: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putAccessScope.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#type EksAccessPolicyAssociation#type}.

---

###### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putAccessScope.parameter.namespaces"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#namespaces EksAccessPolicyAssociation#namespaces}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#create EksAccessPolicyAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#delete EksAccessPolicyAssociation#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EksAccessPolicyAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import eks_access_policy_association

eksAccessPolicyAssociation.EksAccessPolicyAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import eks_access_policy_association

eksAccessPolicyAssociation.EksAccessPolicyAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import eks_access_policy_association

eksAccessPolicyAssociation.EksAccessPolicyAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import eks_access_policy_association

eksAccessPolicyAssociation.EksAccessPolicyAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EksAccessPolicyAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EksAccessPolicyAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EksAccessPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EksAccessPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.accessScope">access_scope</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference">EksAccessPolicyAssociationAccessScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.associatedAt">associated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference">EksAccessPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.accessScopeInput">access_scope_input</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.policyArnInput">policy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.principalArnInput">principal_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.principalArn">principal_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_scope`<sup>Required</sup> <a name="access_scope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.accessScope"></a>

```python
access_scope: EksAccessPolicyAssociationAccessScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference">EksAccessPolicyAssociationAccessScopeOutputReference</a>

---

##### `associated_at`<sup>Required</sup> <a name="associated_at" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.associatedAt"></a>

```python
associated_at: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.timeouts"></a>

```python
timeouts: EksAccessPolicyAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference">EksAccessPolicyAssociationTimeoutsOutputReference</a>

---

##### `access_scope_input`<sup>Optional</sup> <a name="access_scope_input" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.accessScopeInput"></a>

```python
access_scope_input: EksAccessPolicyAssociationAccessScope
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_arn_input`<sup>Optional</sup> <a name="policy_arn_input" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.policyArnInput"></a>

```python
policy_arn_input: str
```

- *Type:* str

---

##### `principal_arn_input`<sup>Optional</sup> <a name="principal_arn_input" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.principalArnInput"></a>

```python
principal_arn_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EksAccessPolicyAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a>]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `principal_arn`<sup>Required</sup> <a name="principal_arn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.principalArn"></a>

```python
principal_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EksAccessPolicyAssociationAccessScope <a name="EksAccessPolicyAssociationAccessScope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_access_policy_association

eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope(
  type: str,
  namespaces: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#type EksAccessPolicyAssociation#type}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#namespaces EksAccessPolicyAssociation#namespaces}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#type EksAccessPolicyAssociation#type}.

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#namespaces EksAccessPolicyAssociation#namespaces}.

---

### EksAccessPolicyAssociationConfig <a name="EksAccessPolicyAssociationConfig" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_access_policy_association

eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_scope: EksAccessPolicyAssociationAccessScope,
  cluster_name: str,
  policy_arn: str,
  principal_arn: str,
  id: str = None,
  timeouts: EksAccessPolicyAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.accessScope">access_scope</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a></code> | access_scope block. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#cluster_name EksAccessPolicyAssociation#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.policyArn">policy_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#policy_arn EksAccessPolicyAssociation#policy_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.principalArn">principal_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#principal_arn EksAccessPolicyAssociation#principal_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#id EksAccessPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_scope`<sup>Required</sup> <a name="access_scope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.accessScope"></a>

```python
access_scope: EksAccessPolicyAssociationAccessScope
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a>

access_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#access_scope EksAccessPolicyAssociation#access_scope}

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#cluster_name EksAccessPolicyAssociation#cluster_name}.

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#policy_arn EksAccessPolicyAssociation#policy_arn}.

---

##### `principal_arn`<sup>Required</sup> <a name="principal_arn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.principalArn"></a>

```python
principal_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#principal_arn EksAccessPolicyAssociation#principal_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#id EksAccessPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.timeouts"></a>

```python
timeouts: EksAccessPolicyAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#timeouts EksAccessPolicyAssociation#timeouts}

---

### EksAccessPolicyAssociationTimeouts <a name="EksAccessPolicyAssociationTimeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_access_policy_association

eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#create EksAccessPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#delete EksAccessPolicyAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#create EksAccessPolicyAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/eks_access_policy_association#delete EksAccessPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksAccessPolicyAssociationAccessScopeOutputReference <a name="EksAccessPolicyAssociationAccessScopeOutputReference" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_access_policy_association

eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resetNamespaces">reset_namespaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespaces` <a name="reset_namespaces" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resetNamespaces"></a>

```python
def reset_namespaces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.namespacesInput">namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.namespacesInput"></a>

```python
namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.internalValue"></a>

```python
internal_value: EksAccessPolicyAssociationAccessScope
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a>

---


### EksAccessPolicyAssociationTimeoutsOutputReference <a name="EksAccessPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_access_policy_association

eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EksAccessPolicyAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a>]

---



