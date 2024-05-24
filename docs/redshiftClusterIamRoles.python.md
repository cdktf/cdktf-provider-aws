# `redshiftClusterIamRoles` Submodule <a name="`redshiftClusterIamRoles` Submodule" id="@cdktf/provider-aws.redshiftClusterIamRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftClusterIamRoles <a name="RedshiftClusterIamRoles" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles aws_redshift_cluster_iam_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_iam_roles

redshiftClusterIamRoles.RedshiftClusterIamRoles(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_identifier: str,
  default_iam_role_arn: str = None,
  iam_role_arns: typing.List[str] = None,
  id: str = None,
  timeouts: RedshiftClusterIamRolesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#cluster_identifier RedshiftClusterIamRoles#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#default_iam_role_arn RedshiftClusterIamRoles#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.iamRoleArns">iam_role_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#iam_role_arns RedshiftClusterIamRoles#iam_role_arns}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#id RedshiftClusterIamRoles#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.clusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#cluster_identifier RedshiftClusterIamRoles#cluster_identifier}.

---

##### `default_iam_role_arn`<sup>Optional</sup> <a name="default_iam_role_arn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.defaultIamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#default_iam_role_arn RedshiftClusterIamRoles#default_iam_role_arn}.

---

##### `iam_role_arns`<sup>Optional</sup> <a name="iam_role_arns" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.iamRoleArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#iam_role_arns RedshiftClusterIamRoles#iam_role_arns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#id RedshiftClusterIamRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#timeouts RedshiftClusterIamRoles#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetDefaultIamRoleArn">reset_default_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetIamRoleArns">reset_iam_role_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#create RedshiftClusterIamRoles#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#delete RedshiftClusterIamRoles#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#update RedshiftClusterIamRoles#update}.

---

##### `reset_default_iam_role_arn` <a name="reset_default_iam_role_arn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetDefaultIamRoleArn"></a>

```python
def reset_default_iam_role_arn() -> None
```

##### `reset_iam_role_arns` <a name="reset_iam_role_arns" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetIamRoleArns"></a>

```python
def reset_iam_role_arns() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RedshiftClusterIamRoles resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_iam_roles

redshiftClusterIamRoles.RedshiftClusterIamRoles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_iam_roles

redshiftClusterIamRoles.RedshiftClusterIamRoles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_iam_roles

redshiftClusterIamRoles.RedshiftClusterIamRoles.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_iam_roles

redshiftClusterIamRoles.RedshiftClusterIamRoles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RedshiftClusterIamRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftClusterIamRoles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftClusterIamRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftClusterIamRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference">RedshiftClusterIamRolesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.defaultIamRoleArnInput">default_iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.iamRoleArnsInput">iam_role_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.iamRoleArns">iam_role_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.timeouts"></a>

```python
timeouts: RedshiftClusterIamRolesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference">RedshiftClusterIamRolesTimeoutsOutputReference</a>

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `default_iam_role_arn_input`<sup>Optional</sup> <a name="default_iam_role_arn_input" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.defaultIamRoleArnInput"></a>

```python
default_iam_role_arn_input: str
```

- *Type:* str

---

##### `iam_role_arns_input`<sup>Optional</sup> <a name="iam_role_arns_input" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.iamRoleArnsInput"></a>

```python
iam_role_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RedshiftClusterIamRolesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a>]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `default_iam_role_arn`<sup>Required</sup> <a name="default_iam_role_arn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.defaultIamRoleArn"></a>

```python
default_iam_role_arn: str
```

- *Type:* str

---

##### `iam_role_arns`<sup>Required</sup> <a name="iam_role_arns" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.iamRoleArns"></a>

```python
iam_role_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRoles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterIamRolesConfig <a name="RedshiftClusterIamRolesConfig" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_iam_roles

redshiftClusterIamRoles.RedshiftClusterIamRolesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_identifier: str,
  default_iam_role_arn: str = None,
  iam_role_arns: typing.List[str] = None,
  id: str = None,
  timeouts: RedshiftClusterIamRolesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#cluster_identifier RedshiftClusterIamRoles#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#default_iam_role_arn RedshiftClusterIamRoles#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.iamRoleArns">iam_role_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#iam_role_arns RedshiftClusterIamRoles#iam_role_arns}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#id RedshiftClusterIamRoles#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#cluster_identifier RedshiftClusterIamRoles#cluster_identifier}.

---

##### `default_iam_role_arn`<sup>Optional</sup> <a name="default_iam_role_arn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.defaultIamRoleArn"></a>

```python
default_iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#default_iam_role_arn RedshiftClusterIamRoles#default_iam_role_arn}.

---

##### `iam_role_arns`<sup>Optional</sup> <a name="iam_role_arns" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.iamRoleArns"></a>

```python
iam_role_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#iam_role_arns RedshiftClusterIamRoles#iam_role_arns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#id RedshiftClusterIamRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesConfig.property.timeouts"></a>

```python
timeouts: RedshiftClusterIamRolesTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#timeouts RedshiftClusterIamRoles#timeouts}

---

### RedshiftClusterIamRolesTimeouts <a name="RedshiftClusterIamRolesTimeouts" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_iam_roles

redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#create RedshiftClusterIamRoles#create}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#delete RedshiftClusterIamRoles#delete}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#update RedshiftClusterIamRoles#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#create RedshiftClusterIamRoles#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#delete RedshiftClusterIamRoles#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/redshift_cluster_iam_roles#update RedshiftClusterIamRoles#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftClusterIamRolesTimeoutsOutputReference <a name="RedshiftClusterIamRolesTimeoutsOutputReference" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_iam_roles

redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RedshiftClusterIamRolesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftClusterIamRoles.RedshiftClusterIamRolesTimeouts">RedshiftClusterIamRolesTimeouts</a>]

---



