# `cognitoUserPoolUiCustomization` Submodule <a name="`cognitoUserPoolUiCustomization` Submodule" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolUiCustomization <a name="CognitoUserPoolUiCustomization" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization aws_cognito_user_pool_ui_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool_ui_customization

cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_pool_id: str,
  client_id: str = None,
  css: str = None,
  id: str = None,
  image_file: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#client_id CognitoUserPoolUiCustomization#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.css">css</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#css CognitoUserPoolUiCustomization#css}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#id CognitoUserPoolUiCustomization#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.imageFile">image_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#image_file CognitoUserPoolUiCustomization#image_file}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#client_id CognitoUserPoolUiCustomization#client_id}.

---

##### `css`<sup>Optional</sup> <a name="css" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.css"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#css CognitoUserPoolUiCustomization#css}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#id CognitoUserPoolUiCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_file`<sup>Optional</sup> <a name="image_file" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.imageFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#image_file CognitoUserPoolUiCustomization#image_file}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetCss">reset_css</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetImageFile">reset_image_file</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_css` <a name="reset_css" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetCss"></a>

```python
def reset_css() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_file` <a name="reset_image_file" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetImageFile"></a>

```python
def reset_image_file() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool_ui_customization

cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool_ui_customization

cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool_ui_customization

cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssVersion">css_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageUrl">image_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lastModifiedDate">last_modified_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssInput">css_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFileInput">image_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.css">css</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFile">image_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `css_version`<sup>Required</sup> <a name="css_version" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssVersion"></a>

```python
css_version: str
```

- *Type:* str

---

##### `image_url`<sup>Required</sup> <a name="image_url" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageUrl"></a>

```python
image_url: str
```

- *Type:* str

---

##### `last_modified_date`<sup>Required</sup> <a name="last_modified_date" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lastModifiedDate"></a>

```python
last_modified_date: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `css_input`<sup>Optional</sup> <a name="css_input" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssInput"></a>

```python
css_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_file_input`<sup>Optional</sup> <a name="image_file_input" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFileInput"></a>

```python
image_file_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.css"></a>

```python
css: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_file`<sup>Required</sup> <a name="image_file" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFile"></a>

```python
image_file: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolUiCustomizationConfig <a name="CognitoUserPoolUiCustomizationConfig" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool_ui_customization

cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_pool_id: str,
  client_id: str = None,
  css: str = None,
  id: str = None,
  image_file: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#client_id CognitoUserPoolUiCustomization#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.css">css</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#css CognitoUserPoolUiCustomization#css}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#id CognitoUserPoolUiCustomization#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.imageFile">image_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#image_file CognitoUserPoolUiCustomization#image_file}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#client_id CognitoUserPoolUiCustomization#client_id}.

---

##### `css`<sup>Optional</sup> <a name="css" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.css"></a>

```python
css: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#css CognitoUserPoolUiCustomization#css}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#id CognitoUserPoolUiCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_file`<sup>Optional</sup> <a name="image_file" id="@cdktf/provider-aws.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.imageFile"></a>

```python
image_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization#image_file CognitoUserPoolUiCustomization#image_file}.

---



