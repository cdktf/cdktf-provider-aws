# `batchSchedulingPolicy` Submodule <a name="`batchSchedulingPolicy` Submodule" id="@cdktf/provider-aws.batchSchedulingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchSchedulingPolicy <a name="BatchSchedulingPolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy aws_batch_scheduling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicy(
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
  fair_share_policy: BatchSchedulingPolicyFairSharePolicy = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#name BatchSchedulingPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.fairSharePolicy">fair_share_policy</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a></code> | fair_share_policy block. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#id BatchSchedulingPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags_all BatchSchedulingPolicy#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#name BatchSchedulingPolicy#name}.

---

##### `fair_share_policy`<sup>Optional</sup> <a name="fair_share_policy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.fairSharePolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

fair_share_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#fair_share_policy BatchSchedulingPolicy#fair_share_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#id BatchSchedulingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags_all BatchSchedulingPolicy#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy">put_fair_share_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairSharePolicy">reset_fair_share_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_fair_share_policy` <a name="put_fair_share_policy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy"></a>

```python
def put_fair_share_policy(
  compute_reservation: typing.Union[int, float] = None,
  share_decay_seconds: typing.Union[int, float] = None,
  share_distribution: typing.Union[IResolvable, typing.List[BatchSchedulingPolicyFairSharePolicyShareDistribution]] = None
) -> None
```

###### `compute_reservation`<sup>Optional</sup> <a name="compute_reservation" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy.parameter.computeReservation"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}.

---

###### `share_decay_seconds`<sup>Optional</sup> <a name="share_decay_seconds" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy.parameter.shareDecaySeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}.

---

###### `share_distribution`<sup>Optional</sup> <a name="share_distribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy.parameter.shareDistribution"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>]]

share_distribution block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}

---

##### `reset_fair_share_policy` <a name="reset_fair_share_policy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairSharePolicy"></a>

```python
def reset_fair_share_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicy">fair_share_policy</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference">BatchSchedulingPolicyFairSharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicyInput">fair_share_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `fair_share_policy`<sup>Required</sup> <a name="fair_share_policy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicy"></a>

```python
fair_share_policy: BatchSchedulingPolicyFairSharePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference">BatchSchedulingPolicyFairSharePolicyOutputReference</a>

---

##### `fair_share_policy_input`<sup>Optional</sup> <a name="fair_share_policy_input" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicyInput"></a>

```python
fair_share_policy_input: BatchSchedulingPolicyFairSharePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BatchSchedulingPolicyConfig <a name="BatchSchedulingPolicyConfig" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  fair_share_policy: BatchSchedulingPolicyFairSharePolicy = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#name BatchSchedulingPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairSharePolicy">fair_share_policy</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a></code> | fair_share_policy block. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#id BatchSchedulingPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags_all BatchSchedulingPolicy#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#name BatchSchedulingPolicy#name}.

---

##### `fair_share_policy`<sup>Optional</sup> <a name="fair_share_policy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairSharePolicy"></a>

```python
fair_share_policy: BatchSchedulingPolicyFairSharePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

fair_share_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#fair_share_policy BatchSchedulingPolicy#fair_share_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#id BatchSchedulingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags_all BatchSchedulingPolicy#tags_all}.

---

### BatchSchedulingPolicyFairSharePolicy <a name="BatchSchedulingPolicyFairSharePolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy(
  compute_reservation: typing.Union[int, float] = None,
  share_decay_seconds: typing.Union[int, float] = None,
  share_distribution: typing.Union[IResolvable, typing.List[BatchSchedulingPolicyFairSharePolicyShareDistribution]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.computeReservation">compute_reservation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDecaySeconds">share_decay_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDistribution">share_distribution</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>]]</code> | share_distribution block. |

---

##### `compute_reservation`<sup>Optional</sup> <a name="compute_reservation" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.computeReservation"></a>

```python
compute_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}.

---

##### `share_decay_seconds`<sup>Optional</sup> <a name="share_decay_seconds" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDecaySeconds"></a>

```python
share_decay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}.

---

##### `share_distribution`<sup>Optional</sup> <a name="share_distribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDistribution"></a>

```python
share_distribution: typing.Union[IResolvable, typing.List[BatchSchedulingPolicyFairSharePolicyShareDistribution]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>]]

share_distribution block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}

---

### BatchSchedulingPolicyFairSharePolicyShareDistribution <a name="BatchSchedulingPolicyFairSharePolicyShareDistribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution(
  share_identifier: str,
  weight_factor: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.shareIdentifier">share_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.weightFactor">weight_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}. |

---

##### `share_identifier`<sup>Required</sup> <a name="share_identifier" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.shareIdentifier"></a>

```python
share_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}.

---

##### `weight_factor`<sup>Optional</sup> <a name="weight_factor" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.weightFactor"></a>

```python
weight_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchSchedulingPolicyFairSharePolicyOutputReference <a name="BatchSchedulingPolicyFairSharePolicyOutputReference" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.putShareDistribution">put_share_distribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetComputeReservation">reset_compute_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDecaySeconds">reset_share_decay_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDistribution">reset_share_distribution</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_share_distribution` <a name="put_share_distribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.putShareDistribution"></a>

```python
def put_share_distribution(
  value: typing.Union[IResolvable, typing.List[BatchSchedulingPolicyFairSharePolicyShareDistribution]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.putShareDistribution.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>]]

---

##### `reset_compute_reservation` <a name="reset_compute_reservation" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetComputeReservation"></a>

```python
def reset_compute_reservation() -> None
```

##### `reset_share_decay_seconds` <a name="reset_share_decay_seconds" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDecaySeconds"></a>

```python
def reset_share_decay_seconds() -> None
```

##### `reset_share_distribution` <a name="reset_share_distribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDistribution"></a>

```python
def reset_share_distribution() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistribution">share_distribution</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList">BatchSchedulingPolicyFairSharePolicyShareDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservationInput">compute_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySecondsInput">share_decay_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistributionInput">share_distribution_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservation">compute_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySeconds">share_decay_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `share_distribution`<sup>Required</sup> <a name="share_distribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistribution"></a>

```python
share_distribution: BatchSchedulingPolicyFairSharePolicyShareDistributionList
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList">BatchSchedulingPolicyFairSharePolicyShareDistributionList</a>

---

##### `compute_reservation_input`<sup>Optional</sup> <a name="compute_reservation_input" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservationInput"></a>

```python
compute_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `share_decay_seconds_input`<sup>Optional</sup> <a name="share_decay_seconds_input" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySecondsInput"></a>

```python
share_decay_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `share_distribution_input`<sup>Optional</sup> <a name="share_distribution_input" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistributionInput"></a>

```python
share_distribution_input: typing.Union[IResolvable, typing.List[BatchSchedulingPolicyFairSharePolicyShareDistribution]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>]]

---

##### `compute_reservation`<sup>Required</sup> <a name="compute_reservation" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservation"></a>

```python
compute_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `share_decay_seconds`<sup>Required</sup> <a name="share_decay_seconds" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySeconds"></a>

```python
share_decay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.internalValue"></a>

```python
internal_value: BatchSchedulingPolicyFairSharePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

---


### BatchSchedulingPolicyFairSharePolicyShareDistributionList <a name="BatchSchedulingPolicyFairSharePolicyShareDistributionList" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchSchedulingPolicyFairSharePolicyShareDistribution]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>]]

---


### BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference <a name="BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resetWeightFactor">reset_weight_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_weight_factor` <a name="reset_weight_factor" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resetWeightFactor"></a>

```python
def reset_weight_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifierInput">share_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactorInput">weight_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifier">share_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactor">weight_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `share_identifier_input`<sup>Optional</sup> <a name="share_identifier_input" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifierInput"></a>

```python
share_identifier_input: str
```

- *Type:* str

---

##### `weight_factor_input`<sup>Optional</sup> <a name="weight_factor_input" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactorInput"></a>

```python
weight_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `share_identifier`<sup>Required</sup> <a name="share_identifier" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifier"></a>

```python
share_identifier: str
```

- *Type:* str

---

##### `weight_factor`<sup>Required</sup> <a name="weight_factor" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactor"></a>

```python
weight_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[BatchSchedulingPolicyFairSharePolicyShareDistribution, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>, cdktf.IResolvable]

---



