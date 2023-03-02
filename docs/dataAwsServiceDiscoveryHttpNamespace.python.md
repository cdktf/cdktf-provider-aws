# `dataAwsServiceDiscoveryHttpNamespace` Submodule <a name="`dataAwsServiceDiscoveryHttpNamespace` Submodule" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServiceDiscoveryHttpNamespace <a name="DataAwsServiceDiscoveryHttpNamespace" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_http_namespace aws_service_discovery_http_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_http_namespace

dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace(
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
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_http_namespace#name DataAwsServiceDiscoveryHttpNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_http_namespace#id DataAwsServiceDiscoveryHttpNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_http_namespace#tags DataAwsServiceDiscoveryHttpNamespace#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_http_namespace#name DataAwsServiceDiscoveryHttpNamespace#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_http_namespace#id DataAwsServiceDiscoveryHttpNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_http_namespace#tags DataAwsServiceDiscoveryHttpNamespace#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_http_namespace

dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_http_namespace

dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_http_namespace

dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.httpName">http_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `http_name`<sup>Required</sup> <a name="http_name" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.httpName"></a>

```python
http_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServiceDiscoveryHttpNamespaceConfig <a name="DataAwsServiceDiscoveryHttpNamespaceConfig" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_http_namespace

dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_http_namespace#name DataAwsServiceDiscoveryHttpNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_http_namespace#id DataAwsServiceDiscoveryHttpNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_http_namespace#tags DataAwsServiceDiscoveryHttpNamespace#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_http_namespace#name DataAwsServiceDiscoveryHttpNamespace#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_http_namespace#id DataAwsServiceDiscoveryHttpNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_http_namespace#tags DataAwsServiceDiscoveryHttpNamespace#tags}.

---



