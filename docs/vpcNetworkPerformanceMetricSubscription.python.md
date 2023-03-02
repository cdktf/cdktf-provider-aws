# `vpcNetworkPerformanceMetricSubscription` Submodule <a name="`vpcNetworkPerformanceMetricSubscription` Submodule" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcNetworkPerformanceMetricSubscription <a name="VpcNetworkPerformanceMetricSubscription" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription aws_vpc_network_performance_metric_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_network_performance_metric_subscription

vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  source: str,
  id: str = None,
  metric: str = None,
  statistic: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#destination VpcNetworkPerformanceMetricSubscription#destination}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#source VpcNetworkPerformanceMetricSubscription#source}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#id VpcNetworkPerformanceMetricSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.metric">metric</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#metric VpcNetworkPerformanceMetricSubscription#metric}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#statistic VpcNetworkPerformanceMetricSubscription#statistic}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#destination VpcNetworkPerformanceMetricSubscription#destination}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#source VpcNetworkPerformanceMetricSubscription#source}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#id VpcNetworkPerformanceMetricSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.metric"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#metric VpcNetworkPerformanceMetricSubscription#metric}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.statistic"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#statistic VpcNetworkPerformanceMetricSubscription#statistic}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetStatistic">reset_statistic</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metric` <a name="reset_metric" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetStatistic"></a>

```python
def reset_statistic() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_network_performance_metric_subscription

vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_network_performance_metric_subscription

vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_network_performance_metric_subscription

vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcNetworkPerformanceMetricSubscriptionConfig <a name="VpcNetworkPerformanceMetricSubscriptionConfig" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_network_performance_metric_subscription

vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  source: str,
  id: str = None,
  metric: str = None,
  statistic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#destination VpcNetworkPerformanceMetricSubscription#destination}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#source VpcNetworkPerformanceMetricSubscription#source}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#id VpcNetworkPerformanceMetricSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.metric">metric</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#metric VpcNetworkPerformanceMetricSubscription#metric}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#statistic VpcNetworkPerformanceMetricSubscription#statistic}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#destination VpcNetworkPerformanceMetricSubscription#destination}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#source VpcNetworkPerformanceMetricSubscription#source}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#id VpcNetworkPerformanceMetricSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.metric"></a>

```python
metric: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#metric VpcNetworkPerformanceMetricSubscription#metric}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#statistic VpcNetworkPerformanceMetricSubscription#statistic}.

---



