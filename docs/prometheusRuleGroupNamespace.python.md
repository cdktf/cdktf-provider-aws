# `prometheusRuleGroupNamespace` Submodule <a name="`prometheusRuleGroupNamespace` Submodule" id="@cdktf/provider-aws.prometheusRuleGroupNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusRuleGroupNamespace <a name="PrometheusRuleGroupNamespace" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace aws_prometheus_rule_group_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_rule_group_namespace

prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data: str,
  name: str,
  workspace_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.data">data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#data PrometheusRuleGroupNamespace#data}. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#name PrometheusRuleGroupNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#workspace_id PrometheusRuleGroupNamespace#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#id PrometheusRuleGroupNamespace#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.data"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#data PrometheusRuleGroupNamespace#data}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#name PrometheusRuleGroupNamespace#name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#workspace_id PrometheusRuleGroupNamespace#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#id PrometheusRuleGroupNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_rule_group_namespace

prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_rule_group_namespace

prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_rule_group_namespace

prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusRuleGroupNamespaceConfig <a name="PrometheusRuleGroupNamespaceConfig" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_rule_group_namespace

prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data: str,
  name: str,
  workspace_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.data">data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#data PrometheusRuleGroupNamespace#data}. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#name PrometheusRuleGroupNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#workspace_id PrometheusRuleGroupNamespace#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#id PrometheusRuleGroupNamespace#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.data"></a>

```python
data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#data PrometheusRuleGroupNamespace#data}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#name PrometheusRuleGroupNamespace#name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#workspace_id PrometheusRuleGroupNamespace#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#id PrometheusRuleGroupNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



