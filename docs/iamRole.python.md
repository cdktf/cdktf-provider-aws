# `iamRole` Submodule <a name="`iamRole` Submodule" id="@cdktf/provider-aws.iamRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamRole <a name="IamRole" id="@cdktf/provider-aws.iamRole.IamRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_role aws_iam_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamRole.IamRole.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_role

iamRole.IamRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assume_role_policy: str,
  description: str = None,
  force_detach_policies: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inline_policy: typing.Union[IResolvable, typing.List[IamRoleInlinePolicy]] = None,
  managed_policy_arns: typing.List[str] = None,
  max_session_duration: typing.Union[int, float] = None,
  name: str = None,
  name_prefix: str = None,
  path: str = None,
  permissions_boundary: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.assumeRolePolicy">assume_role_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#assume_role_policy IamRole#assume_role_policy}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#description IamRole#description}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.forceDetachPolicies">force_detach_policies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#force_detach_policies IamRole#force_detach_policies}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#id IamRole#id}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.inlinePolicy">inline_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicy">IamRoleInlinePolicy</a>]]</code> | inline_policy block. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.managedPolicyArns">managed_policy_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#managed_policy_arns IamRole#managed_policy_arns}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.maxSessionDuration">max_session_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#max_session_duration IamRole#max_session_duration}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name IamRole#name}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name_prefix IamRole#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#path IamRole#path}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.permissionsBoundary">permissions_boundary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#permissions_boundary IamRole#permissions_boundary}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#tags IamRole#tags}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#tags_all IamRole#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assume_role_policy`<sup>Required</sup> <a name="assume_role_policy" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.assumeRolePolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#assume_role_policy IamRole#assume_role_policy}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#description IamRole#description}.

---

##### `force_detach_policies`<sup>Optional</sup> <a name="force_detach_policies" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.forceDetachPolicies"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#force_detach_policies IamRole#force_detach_policies}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#id IamRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inline_policy`<sup>Optional</sup> <a name="inline_policy" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.inlinePolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicy">IamRoleInlinePolicy</a>]]

inline_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#inline_policy IamRole#inline_policy}

---

##### `managed_policy_arns`<sup>Optional</sup> <a name="managed_policy_arns" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.managedPolicyArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#managed_policy_arns IamRole#managed_policy_arns}.

---

##### `max_session_duration`<sup>Optional</sup> <a name="max_session_duration" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.maxSessionDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#max_session_duration IamRole#max_session_duration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name IamRole#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name_prefix IamRole#name_prefix}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#path IamRole#path}.

---

##### `permissions_boundary`<sup>Optional</sup> <a name="permissions_boundary" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.permissionsBoundary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#permissions_boundary IamRole#permissions_boundary}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#tags IamRole#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.iamRole.IamRole.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#tags_all IamRole#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.putInlinePolicy">put_inline_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.resetForceDetachPolicies">reset_force_detach_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.resetInlinePolicy">reset_inline_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.resetManagedPolicyArns">reset_managed_policy_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.resetMaxSessionDuration">reset_max_session_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.resetPermissionsBoundary">reset_permissions_boundary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iamRole.IamRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.iamRole.IamRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamRole.IamRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamRole.IamRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.iamRole.IamRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.iamRole.IamRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.iamRole.IamRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.iamRole.IamRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.iamRole.IamRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iamRole.IamRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_inline_policy` <a name="put_inline_policy" id="@cdktf/provider-aws.iamRole.IamRole.putInlinePolicy"></a>

```python
def put_inline_policy(
  value: typing.Union[IResolvable, typing.List[IamRoleInlinePolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamRole.IamRole.putInlinePolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicy">IamRoleInlinePolicy</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.iamRole.IamRole.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_force_detach_policies` <a name="reset_force_detach_policies" id="@cdktf/provider-aws.iamRole.IamRole.resetForceDetachPolicies"></a>

```python
def reset_force_detach_policies() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.iamRole.IamRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inline_policy` <a name="reset_inline_policy" id="@cdktf/provider-aws.iamRole.IamRole.resetInlinePolicy"></a>

```python
def reset_inline_policy() -> None
```

##### `reset_managed_policy_arns` <a name="reset_managed_policy_arns" id="@cdktf/provider-aws.iamRole.IamRole.resetManagedPolicyArns"></a>

```python
def reset_managed_policy_arns() -> None
```

##### `reset_max_session_duration` <a name="reset_max_session_duration" id="@cdktf/provider-aws.iamRole.IamRole.resetMaxSessionDuration"></a>

```python
def reset_max_session_duration() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.iamRole.IamRole.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.iamRole.IamRole.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.iamRole.IamRole.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_permissions_boundary` <a name="reset_permissions_boundary" id="@cdktf/provider-aws.iamRole.IamRole.resetPermissionsBoundary"></a>

```python
def reset_permissions_boundary() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.iamRole.IamRole.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.iamRole.IamRole.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.iamRole.IamRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import iam_role

iamRole.IamRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamRole.IamRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.iamRole.IamRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import iam_role

iamRole.IamRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamRole.IamRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.iamRole.IamRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import iam_role

iamRole.IamRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamRole.IamRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.createDate">create_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.inlinePolicy">inline_policy</a></code> | <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList">IamRoleInlinePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.assumeRolePolicyInput">assume_role_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.forceDetachPoliciesInput">force_detach_policies_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.inlinePolicyInput">inline_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicy">IamRoleInlinePolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.managedPolicyArnsInput">managed_policy_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.maxSessionDurationInput">max_session_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.permissionsBoundaryInput">permissions_boundary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.assumeRolePolicy">assume_role_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.forceDetachPolicies">force_detach_policies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.managedPolicyArns">managed_policy_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.maxSessionDuration">max_session_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.permissionsBoundary">permissions_boundary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iamRole.IamRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.iamRole.IamRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamRole.IamRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.iamRole.IamRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.iamRole.IamRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.iamRole.IamRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.iamRole.IamRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamRole.IamRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamRole.IamRole.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamRole.IamRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamRole.IamRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamRole.IamRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamRole.IamRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamRole.IamRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.iamRole.IamRole.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `create_date`<sup>Required</sup> <a name="create_date" id="@cdktf/provider-aws.iamRole.IamRole.property.createDate"></a>

```python
create_date: str
```

- *Type:* str

---

##### `inline_policy`<sup>Required</sup> <a name="inline_policy" id="@cdktf/provider-aws.iamRole.IamRole.property.inlinePolicy"></a>

```python
inline_policy: IamRoleInlinePolicyList
```

- *Type:* <a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList">IamRoleInlinePolicyList</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktf/provider-aws.iamRole.IamRole.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `assume_role_policy_input`<sup>Optional</sup> <a name="assume_role_policy_input" id="@cdktf/provider-aws.iamRole.IamRole.property.assumeRolePolicyInput"></a>

```python
assume_role_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.iamRole.IamRole.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `force_detach_policies_input`<sup>Optional</sup> <a name="force_detach_policies_input" id="@cdktf/provider-aws.iamRole.IamRole.property.forceDetachPoliciesInput"></a>

```python
force_detach_policies_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.iamRole.IamRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inline_policy_input`<sup>Optional</sup> <a name="inline_policy_input" id="@cdktf/provider-aws.iamRole.IamRole.property.inlinePolicyInput"></a>

```python
inline_policy_input: typing.Union[IResolvable, typing.List[IamRoleInlinePolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicy">IamRoleInlinePolicy</a>]]

---

##### `managed_policy_arns_input`<sup>Optional</sup> <a name="managed_policy_arns_input" id="@cdktf/provider-aws.iamRole.IamRole.property.managedPolicyArnsInput"></a>

```python
managed_policy_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_session_duration_input`<sup>Optional</sup> <a name="max_session_duration_input" id="@cdktf/provider-aws.iamRole.IamRole.property.maxSessionDurationInput"></a>

```python
max_session_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.iamRole.IamRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.iamRole.IamRole.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.iamRole.IamRole.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `permissions_boundary_input`<sup>Optional</sup> <a name="permissions_boundary_input" id="@cdktf/provider-aws.iamRole.IamRole.property.permissionsBoundaryInput"></a>

```python
permissions_boundary_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.iamRole.IamRole.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.iamRole.IamRole.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `assume_role_policy`<sup>Required</sup> <a name="assume_role_policy" id="@cdktf/provider-aws.iamRole.IamRole.property.assumeRolePolicy"></a>

```python
assume_role_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.iamRole.IamRole.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `force_detach_policies`<sup>Required</sup> <a name="force_detach_policies" id="@cdktf/provider-aws.iamRole.IamRole.property.forceDetachPolicies"></a>

```python
force_detach_policies: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamRole.IamRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_policy_arns`<sup>Required</sup> <a name="managed_policy_arns" id="@cdktf/provider-aws.iamRole.IamRole.property.managedPolicyArns"></a>

```python
managed_policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_session_duration`<sup>Required</sup> <a name="max_session_duration" id="@cdktf/provider-aws.iamRole.IamRole.property.maxSessionDuration"></a>

```python
max_session_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iamRole.IamRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.iamRole.IamRole.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamRole.IamRole.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `permissions_boundary`<sup>Required</sup> <a name="permissions_boundary" id="@cdktf/provider-aws.iamRole.IamRole.property.permissionsBoundary"></a>

```python
permissions_boundary: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.iamRole.IamRole.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.iamRole.IamRole.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iamRole.IamRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamRoleConfig <a name="IamRoleConfig" id="@cdktf/provider-aws.iamRole.IamRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamRole.IamRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_role

iamRole.IamRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assume_role_policy: str,
  description: str = None,
  force_detach_policies: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inline_policy: typing.Union[IResolvable, typing.List[IamRoleInlinePolicy]] = None,
  managed_policy_arns: typing.List[str] = None,
  max_session_duration: typing.Union[int, float] = None,
  name: str = None,
  name_prefix: str = None,
  path: str = None,
  permissions_boundary: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.assumeRolePolicy">assume_role_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#assume_role_policy IamRole#assume_role_policy}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#description IamRole#description}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.forceDetachPolicies">force_detach_policies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#force_detach_policies IamRole#force_detach_policies}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#id IamRole#id}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.inlinePolicy">inline_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicy">IamRoleInlinePolicy</a>]]</code> | inline_policy block. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.managedPolicyArns">managed_policy_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#managed_policy_arns IamRole#managed_policy_arns}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.maxSessionDuration">max_session_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#max_session_duration IamRole#max_session_duration}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name IamRole#name}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name_prefix IamRole#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#path IamRole#path}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.permissionsBoundary">permissions_boundary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#permissions_boundary IamRole#permissions_boundary}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#tags IamRole#tags}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#tags_all IamRole#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assume_role_policy`<sup>Required</sup> <a name="assume_role_policy" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.assumeRolePolicy"></a>

```python
assume_role_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#assume_role_policy IamRole#assume_role_policy}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#description IamRole#description}.

---

##### `force_detach_policies`<sup>Optional</sup> <a name="force_detach_policies" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.forceDetachPolicies"></a>

```python
force_detach_policies: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#force_detach_policies IamRole#force_detach_policies}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#id IamRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inline_policy`<sup>Optional</sup> <a name="inline_policy" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.inlinePolicy"></a>

```python
inline_policy: typing.Union[IResolvable, typing.List[IamRoleInlinePolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicy">IamRoleInlinePolicy</a>]]

inline_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#inline_policy IamRole#inline_policy}

---

##### `managed_policy_arns`<sup>Optional</sup> <a name="managed_policy_arns" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.managedPolicyArns"></a>

```python
managed_policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#managed_policy_arns IamRole#managed_policy_arns}.

---

##### `max_session_duration`<sup>Optional</sup> <a name="max_session_duration" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.maxSessionDuration"></a>

```python
max_session_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#max_session_duration IamRole#max_session_duration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name IamRole#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name_prefix IamRole#name_prefix}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#path IamRole#path}.

---

##### `permissions_boundary`<sup>Optional</sup> <a name="permissions_boundary" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.permissionsBoundary"></a>

```python
permissions_boundary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#permissions_boundary IamRole#permissions_boundary}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#tags IamRole#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.iamRole.IamRoleConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#tags_all IamRole#tags_all}.

---

### IamRoleInlinePolicy <a name="IamRoleInlinePolicy" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_role

iamRole.IamRoleInlinePolicy(
  name: str = None,
  policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicy.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name IamRole#name}. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicy.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#policy IamRole#policy}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicy.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name IamRole#name}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicy.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#policy IamRole#policy}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamRoleInlinePolicyList <a name="IamRoleInlinePolicyList" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_role

iamRole.IamRoleInlinePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IamRoleInlinePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicy">IamRoleInlinePolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IamRoleInlinePolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicy">IamRoleInlinePolicy</a>]]

---


### IamRoleInlinePolicyOutputReference <a name="IamRoleInlinePolicyOutputReference" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_role

iamRole.IamRoleInlinePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.resetPolicy">reset_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.resetPolicy"></a>

```python
def reset_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicy">IamRoleInlinePolicy</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.iamRole.IamRoleInlinePolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IamRoleInlinePolicy, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.iamRole.IamRoleInlinePolicy">IamRoleInlinePolicy</a>, cdktf.IResolvable]

---



