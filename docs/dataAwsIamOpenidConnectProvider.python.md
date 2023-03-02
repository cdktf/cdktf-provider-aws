# `dataAwsIamOpenidConnectProvider` Submodule <a name="`dataAwsIamOpenidConnectProvider` Submodule" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIamOpenidConnectProvider <a name="DataAwsIamOpenidConnectProvider" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider aws_iam_openid_connect_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_openid_connect_provider

dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#arn DataAwsIamOpenidConnectProvider#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#id DataAwsIamOpenidConnectProvider#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#tags DataAwsIamOpenidConnectProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#url DataAwsIamOpenidConnectProvider#url}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#arn DataAwsIamOpenidConnectProvider#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#id DataAwsIamOpenidConnectProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#tags DataAwsIamOpenidConnectProvider#tags}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#url DataAwsIamOpenidConnectProvider#url}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetUrl">reset_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetUrl"></a>

```python
def reset_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_openid_connect_provider

dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_openid_connect_provider

dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_openid_connect_provider

dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.clientIdList">client_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.thumbprintList">thumbprint_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `client_id_list`<sup>Required</sup> <a name="client_id_list" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.clientIdList"></a>

```python
client_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `thumbprint_list`<sup>Required</sup> <a name="thumbprint_list" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.thumbprintList"></a>

```python
thumbprint_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIamOpenidConnectProviderConfig <a name="DataAwsIamOpenidConnectProviderConfig" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_openid_connect_provider

dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#arn DataAwsIamOpenidConnectProvider#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#id DataAwsIamOpenidConnectProvider#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#tags DataAwsIamOpenidConnectProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#url DataAwsIamOpenidConnectProvider#url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#arn DataAwsIamOpenidConnectProvider#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#id DataAwsIamOpenidConnectProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#tags DataAwsIamOpenidConnectProvider#tags}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_openid_connect_provider#url DataAwsIamOpenidConnectProvider#url}.

---



