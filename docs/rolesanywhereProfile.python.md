# `rolesanywhereProfile` Submodule <a name="`rolesanywhereProfile` Submodule" id="@cdktf/provider-aws.rolesanywhereProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RolesanywhereProfile <a name="RolesanywhereProfile" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile aws_rolesanywhere_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  role_arns: typing.List[str],
  duration_seconds: typing.Union[int, float] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  managed_policy_arns: typing.List[str] = None,
  require_instance_properties: typing.Union[bool, IResolvable] = None,
  session_policy: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#name RolesanywhereProfile#name}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.roleArns">role_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#id RolesanywhereProfile#id}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.managedPolicyArns">managed_policy_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.requireInstanceProperties">require_instance_properties</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.sessionPolicy">session_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags RolesanywhereProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags_all RolesanywhereProfile#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#name RolesanywhereProfile#name}.

---

##### `role_arns`<sup>Required</sup> <a name="role_arns" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.roleArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}.

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.durationSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#id RolesanywhereProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_policy_arns`<sup>Optional</sup> <a name="managed_policy_arns" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.managedPolicyArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}.

---

##### `require_instance_properties`<sup>Optional</sup> <a name="require_instance_properties" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.requireInstanceProperties"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}.

---

##### `session_policy`<sup>Optional</sup> <a name="session_policy" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.sessionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags RolesanywhereProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags_all RolesanywhereProfile#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetDurationSeconds">reset_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetManagedPolicyArns">reset_managed_policy_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetRequireInstanceProperties">reset_require_instance_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetSessionPolicy">reset_session_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_duration_seconds` <a name="reset_duration_seconds" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetDurationSeconds"></a>

```python
def reset_duration_seconds() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_policy_arns` <a name="reset_managed_policy_arns" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetManagedPolicyArns"></a>

```python
def reset_managed_policy_arns() -> None
```

##### `reset_require_instance_properties` <a name="reset_require_instance_properties" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetRequireInstanceProperties"></a>

```python
def reset_require_instance_properties() -> None
```

##### `reset_session_policy` <a name="reset_session_policy" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetSessionPolicy"></a>

```python
def reset_session_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.durationSecondsInput">duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArnsInput">managed_policy_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.requireInstancePropertiesInput">require_instance_properties_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.roleArnsInput">role_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicyInput">session_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArns">managed_policy_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.requireInstanceProperties">require_instance_properties</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.roleArns">role_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicy">session_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `duration_seconds_input`<sup>Optional</sup> <a name="duration_seconds_input" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.durationSecondsInput"></a>

```python
duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_policy_arns_input`<sup>Optional</sup> <a name="managed_policy_arns_input" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArnsInput"></a>

```python
managed_policy_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `require_instance_properties_input`<sup>Optional</sup> <a name="require_instance_properties_input" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.requireInstancePropertiesInput"></a>

```python
require_instance_properties_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_arns_input`<sup>Optional</sup> <a name="role_arns_input" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.roleArnsInput"></a>

```python
role_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `session_policy_input`<sup>Optional</sup> <a name="session_policy_input" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicyInput"></a>

```python
session_policy_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_policy_arns`<sup>Required</sup> <a name="managed_policy_arns" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArns"></a>

```python
managed_policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `require_instance_properties`<sup>Required</sup> <a name="require_instance_properties" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.requireInstanceProperties"></a>

```python
require_instance_properties: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_arns`<sup>Required</sup> <a name="role_arns" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.roleArns"></a>

```python
role_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `session_policy`<sup>Required</sup> <a name="session_policy" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicy"></a>

```python
session_policy: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RolesanywhereProfileConfig <a name="RolesanywhereProfileConfig" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  role_arns: typing.List[str],
  duration_seconds: typing.Union[int, float] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  managed_policy_arns: typing.List[str] = None,
  require_instance_properties: typing.Union[bool, IResolvable] = None,
  session_policy: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#name RolesanywhereProfile#name}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.roleArns">role_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#id RolesanywhereProfile#id}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.managedPolicyArns">managed_policy_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.requireInstanceProperties">require_instance_properties</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.sessionPolicy">session_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags RolesanywhereProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags_all RolesanywhereProfile#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#name RolesanywhereProfile#name}.

---

##### `role_arns`<sup>Required</sup> <a name="role_arns" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.roleArns"></a>

```python
role_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}.

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#id RolesanywhereProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_policy_arns`<sup>Optional</sup> <a name="managed_policy_arns" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.managedPolicyArns"></a>

```python
managed_policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}.

---

##### `require_instance_properties`<sup>Optional</sup> <a name="require_instance_properties" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.requireInstanceProperties"></a>

```python
require_instance_properties: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}.

---

##### `session_policy`<sup>Optional</sup> <a name="session_policy" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.sessionPolicy"></a>

```python
session_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags RolesanywhereProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags_all RolesanywhereProfile#tags_all}.

---



