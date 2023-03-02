# `cognitoIdentityProvider` Submodule <a name="`cognitoIdentityProvider` Submodule" id="@cdktf/provider-aws.cognitoIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityProvider <a name="CognitoIdentityProvider" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider aws_cognito_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_provider

cognitoIdentityProvider.CognitoIdentityProvider(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  provider_details: typing.Mapping[str],
  provider_name: str,
  provider_type: str,
  user_pool_id: str,
  attribute_mapping: typing.Mapping[str] = None,
  id: str = None,
  idp_identifiers: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.providerDetails">provider_details</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_details CognitoIdentityProvider#provider_details}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_name CognitoIdentityProvider#provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.providerType">provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_type CognitoIdentityProvider#provider_type}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#user_pool_id CognitoIdentityProvider#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.attributeMapping">attribute_mapping</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#attribute_mapping CognitoIdentityProvider#attribute_mapping}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#id CognitoIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.idpIdentifiers">idp_identifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#idp_identifiers CognitoIdentityProvider#idp_identifiers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `provider_details`<sup>Required</sup> <a name="provider_details" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.providerDetails"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_details CognitoIdentityProvider#provider_details}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.providerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_name CognitoIdentityProvider#provider_name}.

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.providerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_type CognitoIdentityProvider#provider_type}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#user_pool_id CognitoIdentityProvider#user_pool_id}.

---

##### `attribute_mapping`<sup>Optional</sup> <a name="attribute_mapping" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.attributeMapping"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#attribute_mapping CognitoIdentityProvider#attribute_mapping}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#id CognitoIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_identifiers`<sup>Optional</sup> <a name="idp_identifiers" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.Initializer.parameter.idpIdentifiers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#idp_identifiers CognitoIdentityProvider#idp_identifiers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.resetAttributeMapping">reset_attribute_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.resetIdpIdentifiers">reset_idp_identifiers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attribute_mapping` <a name="reset_attribute_mapping" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.resetAttributeMapping"></a>

```python
def reset_attribute_mapping() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idp_identifiers` <a name="reset_idp_identifiers" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.resetIdpIdentifiers"></a>

```python
def reset_idp_identifiers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_provider

cognitoIdentityProvider.CognitoIdentityProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_provider

cognitoIdentityProvider.CognitoIdentityProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_provider

cognitoIdentityProvider.CognitoIdentityProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.attributeMappingInput">attribute_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.idpIdentifiersInput">idp_identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.providerDetailsInput">provider_details_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.providerTypeInput">provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.attributeMapping">attribute_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.idpIdentifiers">idp_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.providerDetails">provider_details</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attribute_mapping_input`<sup>Optional</sup> <a name="attribute_mapping_input" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.attributeMappingInput"></a>

```python
attribute_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_identifiers_input`<sup>Optional</sup> <a name="idp_identifiers_input" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.idpIdentifiersInput"></a>

```python
idp_identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `provider_details_input`<sup>Optional</sup> <a name="provider_details_input" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.providerDetailsInput"></a>

```python
provider_details_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `provider_type_input`<sup>Optional</sup> <a name="provider_type_input" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.providerTypeInput"></a>

```python
provider_type_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `attribute_mapping`<sup>Required</sup> <a name="attribute_mapping" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.attributeMapping"></a>

```python
attribute_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idp_identifiers`<sup>Required</sup> <a name="idp_identifiers" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.idpIdentifiers"></a>

```python
idp_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `provider_details`<sup>Required</sup> <a name="provider_details" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.providerDetails"></a>

```python
provider_details: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityProviderConfig <a name="CognitoIdentityProviderConfig" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_provider

cognitoIdentityProvider.CognitoIdentityProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  provider_details: typing.Mapping[str],
  provider_name: str,
  provider_type: str,
  user_pool_id: str,
  attribute_mapping: typing.Mapping[str] = None,
  id: str = None,
  idp_identifiers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.providerDetails">provider_details</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_details CognitoIdentityProvider#provider_details}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_name CognitoIdentityProvider#provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.providerType">provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_type CognitoIdentityProvider#provider_type}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#user_pool_id CognitoIdentityProvider#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.attributeMapping">attribute_mapping</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#attribute_mapping CognitoIdentityProvider#attribute_mapping}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#id CognitoIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.idpIdentifiers">idp_identifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#idp_identifiers CognitoIdentityProvider#idp_identifiers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `provider_details`<sup>Required</sup> <a name="provider_details" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.providerDetails"></a>

```python
provider_details: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_details CognitoIdentityProvider#provider_details}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_name CognitoIdentityProvider#provider_name}.

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_type CognitoIdentityProvider#provider_type}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#user_pool_id CognitoIdentityProvider#user_pool_id}.

---

##### `attribute_mapping`<sup>Optional</sup> <a name="attribute_mapping" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.attributeMapping"></a>

```python
attribute_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#attribute_mapping CognitoIdentityProvider#attribute_mapping}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#id CognitoIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_identifiers`<sup>Optional</sup> <a name="idp_identifiers" id="@cdktf/provider-aws.cognitoIdentityProvider.CognitoIdentityProviderConfig.property.idpIdentifiers"></a>

```python
idp_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#idp_identifiers CognitoIdentityProvider#idp_identifiers}.

---



