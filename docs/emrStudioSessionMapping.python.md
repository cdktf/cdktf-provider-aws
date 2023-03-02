# `emrStudioSessionMapping` Submodule <a name="`emrStudioSessionMapping` Submodule" id="@cdktf/provider-aws.emrStudioSessionMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrStudioSessionMapping <a name="EmrStudioSessionMapping" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping aws_emr_studio_session_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_studio_session_mapping

emrStudioSessionMapping.EmrStudioSessionMapping(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity_type: str,
  session_policy_arn: str,
  studio_id: str,
  id: str = None,
  identity_id: str = None,
  identity_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.identityType">identity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_type EmrStudioSessionMapping#identity_type}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.sessionPolicyArn">session_policy_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#session_policy_arn EmrStudioSessionMapping#session_policy_arn}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.studioId">studio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#studio_id EmrStudioSessionMapping#studio_id}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#id EmrStudioSessionMapping#id}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.identityId">identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_id EmrStudioSessionMapping#identity_id}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.identityName">identity_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_name EmrStudioSessionMapping#identity_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.identityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_type EmrStudioSessionMapping#identity_type}.

---

##### `session_policy_arn`<sup>Required</sup> <a name="session_policy_arn" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.sessionPolicyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#session_policy_arn EmrStudioSessionMapping#session_policy_arn}.

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.studioId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#studio_id EmrStudioSessionMapping#studio_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#id EmrStudioSessionMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.identityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_id EmrStudioSessionMapping#identity_id}.

---

##### `identity_name`<sup>Optional</sup> <a name="identity_name" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.identityName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_name EmrStudioSessionMapping#identity_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetIdentityId">reset_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetIdentityName">reset_identity_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_id` <a name="reset_identity_id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetIdentityId"></a>

```python
def reset_identity_id() -> None
```

##### `reset_identity_name` <a name="reset_identity_name" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetIdentityName"></a>

```python
def reset_identity_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import emr_studio_session_mapping

emrStudioSessionMapping.EmrStudioSessionMapping.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import emr_studio_session_mapping

emrStudioSessionMapping.EmrStudioSessionMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import emr_studio_session_mapping

emrStudioSessionMapping.EmrStudioSessionMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityIdInput">identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityNameInput">identity_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityTypeInput">identity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArnInput">session_policy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioIdInput">studio_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityId">identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityName">identity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityType">identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArn">session_policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioId">studio_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_id_input`<sup>Optional</sup> <a name="identity_id_input" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityIdInput"></a>

```python
identity_id_input: str
```

- *Type:* str

---

##### `identity_name_input`<sup>Optional</sup> <a name="identity_name_input" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityNameInput"></a>

```python
identity_name_input: str
```

- *Type:* str

---

##### `identity_type_input`<sup>Optional</sup> <a name="identity_type_input" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityTypeInput"></a>

```python
identity_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `session_policy_arn_input`<sup>Optional</sup> <a name="session_policy_arn_input" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArnInput"></a>

```python
session_policy_arn_input: str
```

- *Type:* str

---

##### `studio_id_input`<sup>Optional</sup> <a name="studio_id_input" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioIdInput"></a>

```python
studio_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_id`<sup>Required</sup> <a name="identity_id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

---

##### `identity_name`<sup>Required</sup> <a name="identity_name" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityName"></a>

```python
identity_name: str
```

- *Type:* str

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

---

##### `session_policy_arn`<sup>Required</sup> <a name="session_policy_arn" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArn"></a>

```python
session_policy_arn: str
```

- *Type:* str

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioId"></a>

```python
studio_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmrStudioSessionMappingConfig <a name="EmrStudioSessionMappingConfig" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_studio_session_mapping

emrStudioSessionMapping.EmrStudioSessionMappingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity_type: str,
  session_policy_arn: str,
  studio_id: str,
  id: str = None,
  identity_id: str = None,
  identity_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityType">identity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_type EmrStudioSessionMapping#identity_type}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.sessionPolicyArn">session_policy_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#session_policy_arn EmrStudioSessionMapping#session_policy_arn}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.studioId">studio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#studio_id EmrStudioSessionMapping#studio_id}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#id EmrStudioSessionMapping#id}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityId">identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_id EmrStudioSessionMapping#identity_id}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityName">identity_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_name EmrStudioSessionMapping#identity_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_type EmrStudioSessionMapping#identity_type}.

---

##### `session_policy_arn`<sup>Required</sup> <a name="session_policy_arn" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.sessionPolicyArn"></a>

```python
session_policy_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#session_policy_arn EmrStudioSessionMapping#session_policy_arn}.

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.studioId"></a>

```python
studio_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#studio_id EmrStudioSessionMapping#studio_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#id EmrStudioSessionMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_id EmrStudioSessionMapping#identity_id}.

---

##### `identity_name`<sup>Optional</sup> <a name="identity_name" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityName"></a>

```python
identity_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_name EmrStudioSessionMapping#identity_name}.

---



