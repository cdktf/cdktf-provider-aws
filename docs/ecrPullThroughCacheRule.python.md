# `ecrPullThroughCacheRule` Submodule <a name="`ecrPullThroughCacheRule` Submodule" id="@cdktf/provider-aws.ecrPullThroughCacheRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrPullThroughCacheRule <a name="EcrPullThroughCacheRule" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_pull_through_cache_rule

ecrPullThroughCacheRule.EcrPullThroughCacheRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ecr_repository_prefix: str,
  upstream_registry_url: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.ecrRepositoryPrefix">ecr_repository_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.upstreamRegistryUrl">upstream_registry_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ecr_repository_prefix`<sup>Required</sup> <a name="ecr_repository_prefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.ecrRepositoryPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}.

---

##### `upstream_registry_url`<sup>Required</sup> <a name="upstream_registry_url" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.upstreamRegistryUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ecr_pull_through_cache_rule

ecrPullThroughCacheRule.EcrPullThroughCacheRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ecr_pull_through_cache_rule

ecrPullThroughCacheRule.EcrPullThroughCacheRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ecr_pull_through_cache_rule

ecrPullThroughCacheRule.EcrPullThroughCacheRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.registryId">registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefixInput">ecr_repository_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrlInput">upstream_registry_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefix">ecr_repository_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrl">upstream_registry_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

---

##### `ecr_repository_prefix_input`<sup>Optional</sup> <a name="ecr_repository_prefix_input" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefixInput"></a>

```python
ecr_repository_prefix_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `upstream_registry_url_input`<sup>Optional</sup> <a name="upstream_registry_url_input" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrlInput"></a>

```python
upstream_registry_url_input: str
```

- *Type:* str

---

##### `ecr_repository_prefix`<sup>Required</sup> <a name="ecr_repository_prefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefix"></a>

```python
ecr_repository_prefix: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `upstream_registry_url`<sup>Required</sup> <a name="upstream_registry_url" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrl"></a>

```python
upstream_registry_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcrPullThroughCacheRuleConfig <a name="EcrPullThroughCacheRuleConfig" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_pull_through_cache_rule

ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ecr_repository_prefix: str,
  upstream_registry_url: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix">ecr_repository_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistryUrl">upstream_registry_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ecr_repository_prefix`<sup>Required</sup> <a name="ecr_repository_prefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix"></a>

```python
ecr_repository_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}.

---

##### `upstream_registry_url`<sup>Required</sup> <a name="upstream_registry_url" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistryUrl"></a>

```python
upstream_registry_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



