# `dataAwsServiceDiscoveryService` Submodule <a name="`dataAwsServiceDiscoveryService` Submodule" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServiceDiscoveryService <a name="DataAwsServiceDiscoveryService" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service aws_service_discovery_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService(
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
  namespace_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#name DataAwsServiceDiscoveryService#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#namespace_id DataAwsServiceDiscoveryService#namespace_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#id DataAwsServiceDiscoveryService#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#tags DataAwsServiceDiscoveryService#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#tags_all DataAwsServiceDiscoveryService#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#name DataAwsServiceDiscoveryService#name}.

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.namespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#namespace_id DataAwsServiceDiscoveryService#namespace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#id DataAwsServiceDiscoveryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#tags DataAwsServiceDiscoveryService#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#tags_all DataAwsServiceDiscoveryService#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.dnsConfig">dns_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList">DataAwsServiceDiscoveryServiceDnsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList">DataAwsServiceDiscoveryServiceHealthCheckConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.healthCheckCustomConfig">health_check_custom_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList">DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_config`<sup>Required</sup> <a name="dns_config" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.dnsConfig"></a>

```python
dns_config: DataAwsServiceDiscoveryServiceDnsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList">DataAwsServiceDiscoveryServiceDnsConfigList</a>

---

##### `health_check_config`<sup>Required</sup> <a name="health_check_config" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.healthCheckConfig"></a>

```python
health_check_config: DataAwsServiceDiscoveryServiceHealthCheckConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList">DataAwsServiceDiscoveryServiceHealthCheckConfigList</a>

---

##### `health_check_custom_config`<sup>Required</sup> <a name="health_check_custom_config" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.healthCheckCustomConfig"></a>

```python
health_check_custom_config: DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList">DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServiceDiscoveryServiceConfig <a name="DataAwsServiceDiscoveryServiceConfig" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  namespace_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#name DataAwsServiceDiscoveryService#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#namespace_id DataAwsServiceDiscoveryService#namespace_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#id DataAwsServiceDiscoveryService#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#tags DataAwsServiceDiscoveryService#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#tags_all DataAwsServiceDiscoveryService#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#name DataAwsServiceDiscoveryService#name}.

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#namespace_id DataAwsServiceDiscoveryService#namespace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#id DataAwsServiceDiscoveryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#tags DataAwsServiceDiscoveryService#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_service#tags_all DataAwsServiceDiscoveryService#tags_all}.

---

### DataAwsServiceDiscoveryServiceDnsConfig <a name="DataAwsServiceDiscoveryServiceDnsConfig" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfig()
```


### DataAwsServiceDiscoveryServiceDnsConfigDnsRecords <a name="DataAwsServiceDiscoveryServiceDnsConfigDnsRecords" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecords()
```


### DataAwsServiceDiscoveryServiceHealthCheckConfig <a name="DataAwsServiceDiscoveryServiceHealthCheckConfig" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfig()
```


### DataAwsServiceDiscoveryServiceHealthCheckCustomConfig <a name="DataAwsServiceDiscoveryServiceHealthCheckCustomConfig" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList <a name="DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference <a name="DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecords">DataAwsServiceDiscoveryServiceDnsConfigDnsRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsServiceDiscoveryServiceDnsConfigDnsRecords
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecords">DataAwsServiceDiscoveryServiceDnsConfigDnsRecords</a>

---


### DataAwsServiceDiscoveryServiceDnsConfigList <a name="DataAwsServiceDiscoveryServiceDnsConfigList" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsServiceDiscoveryServiceDnsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsServiceDiscoveryServiceDnsConfigOutputReference <a name="DataAwsServiceDiscoveryServiceDnsConfigOutputReference" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecords">dns_records</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList">DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicy">routing_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfig">DataAwsServiceDiscoveryServiceDnsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_records`<sup>Required</sup> <a name="dns_records" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecords"></a>

```python
dns_records: DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList">DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList</a>

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `routing_policy`<sup>Required</sup> <a name="routing_policy" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicy"></a>

```python
routing_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsServiceDiscoveryServiceDnsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceDnsConfig">DataAwsServiceDiscoveryServiceDnsConfig</a>

---


### DataAwsServiceDiscoveryServiceHealthCheckConfigList <a name="DataAwsServiceDiscoveryServiceHealthCheckConfigList" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference <a name="DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePath">resource_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfig">DataAwsServiceDiscoveryServiceHealthCheckConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_path`<sup>Required</sup> <a name="resource_path" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsServiceDiscoveryServiceHealthCheckConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckConfig">DataAwsServiceDiscoveryServiceHealthCheckConfig</a>

---


### DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList <a name="DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference <a name="DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_service_discovery_service

dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfig">DataAwsServiceDiscoveryServiceHealthCheckCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsServiceDiscoveryServiceHealthCheckCustomConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServiceDiscoveryService.DataAwsServiceDiscoveryServiceHealthCheckCustomConfig">DataAwsServiceDiscoveryServiceHealthCheckCustomConfig</a>

---



