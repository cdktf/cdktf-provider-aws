# `dataAwsServicecatalogLaunchPaths` Submodule <a name="`dataAwsServicecatalogLaunchPaths` Submodule" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicecatalogLaunchPaths <a name="DataAwsServicecatalogLaunchPaths" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths aws_servicecatalog_launch_paths}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_launch_paths

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  product_id: str,
  accept_language: str = None,
  id: str = None,
  timeouts: DataAwsServicecatalogLaunchPathsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#product_id DataAwsServicecatalogLaunchPaths#product_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#accept_language DataAwsServicecatalogLaunchPaths#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#id DataAwsServicecatalogLaunchPaths#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#product_id DataAwsServicecatalogLaunchPaths#product_id}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#accept_language DataAwsServicecatalogLaunchPaths#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#id DataAwsServicecatalogLaunchPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#timeouts DataAwsServicecatalogLaunchPaths#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#read DataAwsServicecatalogLaunchPaths#read}.

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_launch_paths

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_launch_paths

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_launch_paths

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.summaries">summaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList">DataAwsServicecatalogLaunchPathsSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference">DataAwsServicecatalogLaunchPathsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productId">product_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `summaries`<sup>Required</sup> <a name="summaries" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.summaries"></a>

```python
summaries: DataAwsServicecatalogLaunchPathsSummariesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList">DataAwsServicecatalogLaunchPathsSummariesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.timeouts"></a>

```python
timeouts: DataAwsServicecatalogLaunchPathsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference">DataAwsServicecatalogLaunchPathsTimeoutsOutputReference</a>

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsServicecatalogLaunchPathsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a>, cdktf.IResolvable]

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicecatalogLaunchPathsConfig <a name="DataAwsServicecatalogLaunchPathsConfig" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_launch_paths

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  product_id: str,
  accept_language: str = None,
  id: str = None,
  timeouts: DataAwsServicecatalogLaunchPathsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#product_id DataAwsServicecatalogLaunchPaths#product_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#accept_language DataAwsServicecatalogLaunchPaths#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#id DataAwsServicecatalogLaunchPaths#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#product_id DataAwsServicecatalogLaunchPaths#product_id}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#accept_language DataAwsServicecatalogLaunchPaths#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#id DataAwsServicecatalogLaunchPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.timeouts"></a>

```python
timeouts: DataAwsServicecatalogLaunchPathsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#timeouts DataAwsServicecatalogLaunchPaths#timeouts}

---

### DataAwsServicecatalogLaunchPathsSummaries <a name="DataAwsServicecatalogLaunchPathsSummaries" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_launch_paths

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries()
```


### DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries <a name="DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_launch_paths

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries()
```


### DataAwsServicecatalogLaunchPathsTimeouts <a name="DataAwsServicecatalogLaunchPathsTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_launch_paths

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#read DataAwsServicecatalogLaunchPaths#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#read DataAwsServicecatalogLaunchPaths#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList <a name="DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_launch_paths

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference <a name="DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_launch_paths

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries">DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries">DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries</a>

---


### DataAwsServicecatalogLaunchPathsSummariesList <a name="DataAwsServicecatalogLaunchPathsSummariesList" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_launch_paths

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsServicecatalogLaunchPathsSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsServicecatalogLaunchPathsSummariesOutputReference <a name="DataAwsServicecatalogLaunchPathsSummariesOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_launch_paths

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.constraintSummaries">constraint_summaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList">DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.pathId">path_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries">DataAwsServicecatalogLaunchPathsSummaries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constraint_summaries`<sup>Required</sup> <a name="constraint_summaries" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.constraintSummaries"></a>

```python
constraint_summaries: DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList">DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path_id`<sup>Required</sup> <a name="path_id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.pathId"></a>

```python
path_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsServicecatalogLaunchPathsSummaries
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries">DataAwsServicecatalogLaunchPathsSummaries</a>

---


### DataAwsServicecatalogLaunchPathsTimeoutsOutputReference <a name="DataAwsServicecatalogLaunchPathsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_launch_paths

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsServicecatalogLaunchPathsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a>, cdktf.IResolvable]

---



