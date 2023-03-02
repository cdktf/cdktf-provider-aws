# `ssoadminPermissionSetInlinePolicy` Submodule <a name="`ssoadminPermissionSetInlinePolicy` Submodule" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminPermissionSetInlinePolicy <a name="SsoadminPermissionSetInlinePolicy" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy aws_ssoadmin_permission_set_inline_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssoadmin_permission_set_inline_policy

ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  inline_policy: str,
  instance_arn: str,
  permission_set_arn: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.inlinePolicy">inline_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.permissionSetArn">permission_set_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#id SsoadminPermissionSetInlinePolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `inline_policy`<sup>Required</sup> <a name="inline_policy" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.inlinePolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}.

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.instanceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}.

---

##### `permission_set_arn`<sup>Required</sup> <a name="permission_set_arn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.permissionSetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#id SsoadminPermissionSetInlinePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ssoadmin_permission_set_inline_policy

ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ssoadmin_permission_set_inline_policy

ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ssoadmin_permission_set_inline_policy

ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicyInput">inline_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArnInput">permission_set_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicy">inline_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArn">permission_set_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inline_policy_input`<sup>Optional</sup> <a name="inline_policy_input" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicyInput"></a>

```python
inline_policy_input: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `permission_set_arn_input`<sup>Optional</sup> <a name="permission_set_arn_input" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArnInput"></a>

```python
permission_set_arn_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inline_policy`<sup>Required</sup> <a name="inline_policy" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicy"></a>

```python
inline_policy: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `permission_set_arn`<sup>Required</sup> <a name="permission_set_arn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArn"></a>

```python
permission_set_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminPermissionSetInlinePolicyConfig <a name="SsoadminPermissionSetInlinePolicyConfig" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssoadmin_permission_set_inline_policy

ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  inline_policy: str,
  instance_arn: str,
  permission_set_arn: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.inlinePolicy">inline_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.permissionSetArn">permission_set_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#id SsoadminPermissionSetInlinePolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `inline_policy`<sup>Required</sup> <a name="inline_policy" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.inlinePolicy"></a>

```python
inline_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}.

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}.

---

##### `permission_set_arn`<sup>Required</sup> <a name="permission_set_arn" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.permissionSetArn"></a>

```python
permission_set_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#id SsoadminPermissionSetInlinePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



