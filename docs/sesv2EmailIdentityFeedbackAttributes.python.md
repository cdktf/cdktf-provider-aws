# `sesv2EmailIdentityFeedbackAttributes` Submodule <a name="`sesv2EmailIdentityFeedbackAttributes` Submodule" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2EmailIdentityFeedbackAttributes <a name="Sesv2EmailIdentityFeedbackAttributes" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes aws_sesv2_email_identity_feedback_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_email_identity_feedback_attributes

sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email_identity: str,
  email_forwarding_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.emailIdentity">email_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.emailForwardingEnabled">email_forwarding_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_identity`<sup>Required</sup> <a name="email_identity" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.emailIdentity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}.

---

##### `email_forwarding_enabled`<sup>Optional</sup> <a name="email_forwarding_enabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.emailForwardingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetEmailForwardingEnabled">reset_email_forwarding_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_email_forwarding_enabled` <a name="reset_email_forwarding_enabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetEmailForwardingEnabled"></a>

```python
def reset_email_forwarding_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_email_identity_feedback_attributes

sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_email_identity_feedback_attributes

sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_email_identity_feedback_attributes

sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabledInput">email_forwarding_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentityInput">email_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabled">email_forwarding_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentity">email_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_forwarding_enabled_input`<sup>Optional</sup> <a name="email_forwarding_enabled_input" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabledInput"></a>

```python
email_forwarding_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_identity_input`<sup>Optional</sup> <a name="email_identity_input" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentityInput"></a>

```python
email_identity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `email_forwarding_enabled`<sup>Required</sup> <a name="email_forwarding_enabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabled"></a>

```python
email_forwarding_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_identity`<sup>Required</sup> <a name="email_identity" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentity"></a>

```python
email_identity: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2EmailIdentityFeedbackAttributesConfig <a name="Sesv2EmailIdentityFeedbackAttributesConfig" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_email_identity_feedback_attributes

sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email_identity: str,
  email_forwarding_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailIdentity">email_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailForwardingEnabled">email_forwarding_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_identity`<sup>Required</sup> <a name="email_identity" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailIdentity"></a>

```python
email_identity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}.

---

##### `email_forwarding_enabled`<sup>Optional</sup> <a name="email_forwarding_enabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailForwardingEnabled"></a>

```python
email_forwarding_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



