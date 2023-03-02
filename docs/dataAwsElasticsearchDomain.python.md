# `dataAwsElasticsearchDomain` Submodule <a name="`dataAwsElasticsearchDomain` Submodule" id="@cdktf/provider-aws.dataAwsElasticsearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticsearchDomain <a name="DataAwsElasticsearchDomain" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain aws_elasticsearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#domain_name DataAwsElasticsearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#id DataAwsElasticsearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#tags DataAwsElasticsearchDomain#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#domain_name DataAwsElasticsearchDomain#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#id DataAwsElasticsearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#tags DataAwsElasticsearchDomain#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.accessPolicies">access_policies</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.advancedOptions">advanced_options</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.advancedSecurityOptions">advanced_security_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList">DataAwsElasticsearchDomainAdvancedSecurityOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.autoTuneOptions">auto_tune_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList">DataAwsElasticsearchDomainAutoTuneOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList">DataAwsElasticsearchDomainClusterConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.cognitoOptions">cognito_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList">DataAwsElasticsearchDomainCognitoOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.created">created</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.deleted">deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.ebsOptions">ebs_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList">DataAwsElasticsearchDomainEbsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.elasticsearchVersion">elasticsearch_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.encryptionAtRest">encryption_at_rest</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList">DataAwsElasticsearchDomainEncryptionAtRestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.kibanaEndpoint">kibana_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.logPublishingOptions">log_publishing_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList">DataAwsElasticsearchDomainLogPublishingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.nodeToNodeEncryption">node_to_node_encryption</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList">DataAwsElasticsearchDomainNodeToNodeEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.processing">processing</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.snapshotOptions">snapshot_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList">DataAwsElasticsearchDomainSnapshotOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList">DataAwsElasticsearchDomainVpcOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_policies`<sup>Required</sup> <a name="access_policies" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.accessPolicies"></a>

```python
access_policies: str
```

- *Type:* str

---

##### `advanced_options`<sup>Required</sup> <a name="advanced_options" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.advancedOptions"></a>

```python
advanced_options: StringMap
```

- *Type:* cdktf.StringMap

---

##### `advanced_security_options`<sup>Required</sup> <a name="advanced_security_options" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.advancedSecurityOptions"></a>

```python
advanced_security_options: DataAwsElasticsearchDomainAdvancedSecurityOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList">DataAwsElasticsearchDomainAdvancedSecurityOptionsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_tune_options`<sup>Required</sup> <a name="auto_tune_options" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.autoTuneOptions"></a>

```python
auto_tune_options: DataAwsElasticsearchDomainAutoTuneOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList">DataAwsElasticsearchDomainAutoTuneOptionsList</a>

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.clusterConfig"></a>

```python
cluster_config: DataAwsElasticsearchDomainClusterConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList">DataAwsElasticsearchDomainClusterConfigList</a>

---

##### `cognito_options`<sup>Required</sup> <a name="cognito_options" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.cognitoOptions"></a>

```python
cognito_options: DataAwsElasticsearchDomainCognitoOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList">DataAwsElasticsearchDomainCognitoOptionsList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.created"></a>

```python
created: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.deleted"></a>

```python
deleted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `ebs_options`<sup>Required</sup> <a name="ebs_options" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.ebsOptions"></a>

```python
ebs_options: DataAwsElasticsearchDomainEbsOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList">DataAwsElasticsearchDomainEbsOptionsList</a>

---

##### `elasticsearch_version`<sup>Required</sup> <a name="elasticsearch_version" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.elasticsearchVersion"></a>

```python
elasticsearch_version: str
```

- *Type:* str

---

##### `encryption_at_rest`<sup>Required</sup> <a name="encryption_at_rest" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.encryptionAtRest"></a>

```python
encryption_at_rest: DataAwsElasticsearchDomainEncryptionAtRestList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList">DataAwsElasticsearchDomainEncryptionAtRestList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `kibana_endpoint`<sup>Required</sup> <a name="kibana_endpoint" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.kibanaEndpoint"></a>

```python
kibana_endpoint: str
```

- *Type:* str

---

##### `log_publishing_options`<sup>Required</sup> <a name="log_publishing_options" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.logPublishingOptions"></a>

```python
log_publishing_options: DataAwsElasticsearchDomainLogPublishingOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList">DataAwsElasticsearchDomainLogPublishingOptionsList</a>

---

##### `node_to_node_encryption`<sup>Required</sup> <a name="node_to_node_encryption" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.nodeToNodeEncryption"></a>

```python
node_to_node_encryption: DataAwsElasticsearchDomainNodeToNodeEncryptionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList">DataAwsElasticsearchDomainNodeToNodeEncryptionList</a>

---

##### `processing`<sup>Required</sup> <a name="processing" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.processing"></a>

```python
processing: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `snapshot_options`<sup>Required</sup> <a name="snapshot_options" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.snapshotOptions"></a>

```python
snapshot_options: DataAwsElasticsearchDomainSnapshotOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList">DataAwsElasticsearchDomainSnapshotOptionsList</a>

---

##### `vpc_options`<sup>Required</sup> <a name="vpc_options" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.vpcOptions"></a>

```python
vpc_options: DataAwsElasticsearchDomainVpcOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList">DataAwsElasticsearchDomainVpcOptionsList</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticsearchDomainAdvancedSecurityOptions <a name="DataAwsElasticsearchDomainAdvancedSecurityOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions()
```


### DataAwsElasticsearchDomainAutoTuneOptions <a name="DataAwsElasticsearchDomainAutoTuneOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions()
```


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule()
```


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration()
```


### DataAwsElasticsearchDomainClusterConfig <a name="DataAwsElasticsearchDomainClusterConfig" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig()
```


### DataAwsElasticsearchDomainClusterConfigColdStorageOptions <a name="DataAwsElasticsearchDomainClusterConfigColdStorageOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptions()
```


### DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig <a name="DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig()
```


### DataAwsElasticsearchDomainCognitoOptions <a name="DataAwsElasticsearchDomainCognitoOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions()
```


### DataAwsElasticsearchDomainConfig <a name="DataAwsElasticsearchDomainConfig" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#domain_name DataAwsElasticsearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#id DataAwsElasticsearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#tags DataAwsElasticsearchDomain#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#domain_name DataAwsElasticsearchDomain#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#id DataAwsElasticsearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#tags DataAwsElasticsearchDomain#tags}.

---

### DataAwsElasticsearchDomainEbsOptions <a name="DataAwsElasticsearchDomainEbsOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions()
```


### DataAwsElasticsearchDomainEncryptionAtRest <a name="DataAwsElasticsearchDomainEncryptionAtRest" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest()
```


### DataAwsElasticsearchDomainLogPublishingOptions <a name="DataAwsElasticsearchDomainLogPublishingOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions()
```


### DataAwsElasticsearchDomainNodeToNodeEncryption <a name="DataAwsElasticsearchDomainNodeToNodeEncryption" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption()
```


### DataAwsElasticsearchDomainSnapshotOptions <a name="DataAwsElasticsearchDomainSnapshotOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions()
```


### DataAwsElasticsearchDomainVpcOptions <a name="DataAwsElasticsearchDomainVpcOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticsearchDomainAdvancedSecurityOptionsList <a name="DataAwsElasticsearchDomainAdvancedSecurityOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference <a name="DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">internal_user_database_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions">DataAwsElasticsearchDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_user_database_enabled`<sup>Required</sup> <a name="internal_user_database_enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```python
internal_user_database_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions">DataAwsElasticsearchDomainAdvancedSecurityOptions</a>

---


### DataAwsElasticsearchDomainAutoTuneOptionsList <a name="DataAwsElasticsearchDomainAutoTuneOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainAutoTuneOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence">cron_expression_for_recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt">start_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression_for_recurrence`<sup>Required</sup> <a name="cron_expression_for_recurrence" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence"></a>

```python
cron_expression_for_recurrence: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration"></a>

```python
duration: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList</a>

---

##### `start_at`<sup>Required</sup> <a name="start_at" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt"></a>

```python
start_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>

---


### DataAwsElasticsearchDomainAutoTuneOptionsOutputReference <a name="DataAwsElasticsearchDomainAutoTuneOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable">rollback_on_disable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions">DataAwsElasticsearchDomainAutoTuneOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `maintenance_schedule`<sup>Required</sup> <a name="maintenance_schedule" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule"></a>

```python
maintenance_schedule: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList</a>

---

##### `rollback_on_disable`<sup>Required</sup> <a name="rollback_on_disable" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable"></a>

```python
rollback_on_disable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainAutoTuneOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions">DataAwsElasticsearchDomainAutoTuneOptions</a>

---


### DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList <a name="DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference <a name="DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptions">DataAwsElasticsearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptions">DataAwsElasticsearchDomainClusterConfigColdStorageOptions</a>

---


### DataAwsElasticsearchDomainClusterConfigList <a name="DataAwsElasticsearchDomainClusterConfigList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainClusterConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainClusterConfigOutputReference <a name="DataAwsElasticsearchDomainClusterConfigOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptions">cold_storage_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList">DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCount">dedicated_master_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">dedicated_master_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterType">dedicated_master_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmCount">warm_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmEnabled">warm_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmType">warm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig">zone_awareness_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList">DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">zone_awareness_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig">DataAwsElasticsearchDomainClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cold_storage_options`<sup>Required</sup> <a name="cold_storage_options" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```python
cold_storage_options: DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList">DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList</a>

---

##### `dedicated_master_count`<sup>Required</sup> <a name="dedicated_master_count" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```python
dedicated_master_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dedicated_master_enabled`<sup>Required</sup> <a name="dedicated_master_enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```python
dedicated_master_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `dedicated_master_type`<sup>Required</sup> <a name="dedicated_master_type" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```python
dedicated_master_type: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `warm_count`<sup>Required</sup> <a name="warm_count" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmCount"></a>

```python
warm_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warm_enabled`<sup>Required</sup> <a name="warm_enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmEnabled"></a>

```python
warm_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `warm_type`<sup>Required</sup> <a name="warm_type" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmType"></a>

```python
warm_type: str
```

- *Type:* str

---

##### `zone_awareness_config`<sup>Required</sup> <a name="zone_awareness_config" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```python
zone_awareness_config: DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList">DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList</a>

---

##### `zone_awareness_enabled`<sup>Required</sup> <a name="zone_awareness_enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```python
zone_awareness_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig">DataAwsElasticsearchDomainClusterConfig</a>

---


### DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList <a name="DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference <a name="DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">availability_zone_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig">DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_count`<sup>Required</sup> <a name="availability_zone_count" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```python
availability_zone_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig">DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

---


### DataAwsElasticsearchDomainCognitoOptionsList <a name="DataAwsElasticsearchDomainCognitoOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainCognitoOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainCognitoOptionsOutputReference <a name="DataAwsElasticsearchDomainCognitoOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions">DataAwsElasticsearchDomainCognitoOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainCognitoOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions">DataAwsElasticsearchDomainCognitoOptions</a>

---


### DataAwsElasticsearchDomainEbsOptionsList <a name="DataAwsElasticsearchDomainEbsOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainEbsOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainEbsOptionsOutputReference <a name="DataAwsElasticsearchDomainEbsOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabled">ebs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions">DataAwsElasticsearchDomainEbsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs_enabled`<sup>Required</sup> <a name="ebs_enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```python
ebs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainEbsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions">DataAwsElasticsearchDomainEbsOptions</a>

---


### DataAwsElasticsearchDomainEncryptionAtRestList <a name="DataAwsElasticsearchDomainEncryptionAtRestList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainEncryptionAtRestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainEncryptionAtRestOutputReference <a name="DataAwsElasticsearchDomainEncryptionAtRestOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest">DataAwsElasticsearchDomainEncryptionAtRest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainEncryptionAtRest
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest">DataAwsElasticsearchDomainEncryptionAtRest</a>

---


### DataAwsElasticsearchDomainLogPublishingOptionsList <a name="DataAwsElasticsearchDomainLogPublishingOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainLogPublishingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainLogPublishingOptionsOutputReference <a name="DataAwsElasticsearchDomainLogPublishingOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions">DataAwsElasticsearchDomainLogPublishingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainLogPublishingOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions">DataAwsElasticsearchDomainLogPublishingOptions</a>

---


### DataAwsElasticsearchDomainNodeToNodeEncryptionList <a name="DataAwsElasticsearchDomainNodeToNodeEncryptionList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference <a name="DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption">DataAwsElasticsearchDomainNodeToNodeEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainNodeToNodeEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption">DataAwsElasticsearchDomainNodeToNodeEncryption</a>

---


### DataAwsElasticsearchDomainSnapshotOptionsList <a name="DataAwsElasticsearchDomainSnapshotOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainSnapshotOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainSnapshotOptionsOutputReference <a name="DataAwsElasticsearchDomainSnapshotOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">automated_snapshot_start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions">DataAwsElasticsearchDomainSnapshotOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automated_snapshot_start_hour`<sup>Required</sup> <a name="automated_snapshot_start_hour" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```python
automated_snapshot_start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainSnapshotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions">DataAwsElasticsearchDomainSnapshotOptions</a>

---


### DataAwsElasticsearchDomainVpcOptionsList <a name="DataAwsElasticsearchDomainVpcOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticsearchDomainVpcOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticsearchDomainVpcOptionsOutputReference <a name="DataAwsElasticsearchDomainVpcOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticsearch_domain

dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions">DataAwsElasticsearchDomainVpcOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticsearchDomainVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions">DataAwsElasticsearchDomainVpcOptions</a>

---



