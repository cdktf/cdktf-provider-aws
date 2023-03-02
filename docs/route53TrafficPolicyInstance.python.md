# `route53TrafficPolicyInstance` Submodule <a name="`route53TrafficPolicyInstance` Submodule" id="@cdktf/provider-aws.route53TrafficPolicyInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53TrafficPolicyInstance <a name="Route53TrafficPolicyInstance" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance aws_route53_traffic_policy_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_traffic_policy_instance

route53TrafficPolicyInstance.Route53TrafficPolicyInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hosted_zone_id: str,
  name: str,
  traffic_policy_id: str,
  traffic_policy_version: typing.Union[int, float],
  ttl: typing.Union[int, float],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#hosted_zone_id Route53TrafficPolicyInstance#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#name Route53TrafficPolicyInstance#name}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.trafficPolicyId">traffic_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_id Route53TrafficPolicyInstance#traffic_policy_id}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.trafficPolicyVersion">traffic_policy_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_version Route53TrafficPolicyInstance#traffic_policy_version}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#ttl Route53TrafficPolicyInstance#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#id Route53TrafficPolicyInstance#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.hostedZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#hosted_zone_id Route53TrafficPolicyInstance#hosted_zone_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#name Route53TrafficPolicyInstance#name}.

---

##### `traffic_policy_id`<sup>Required</sup> <a name="traffic_policy_id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.trafficPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_id Route53TrafficPolicyInstance#traffic_policy_id}.

---

##### `traffic_policy_version`<sup>Required</sup> <a name="traffic_policy_version" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.trafficPolicyVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_version Route53TrafficPolicyInstance#traffic_policy_version}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#ttl Route53TrafficPolicyInstance#ttl}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#id Route53TrafficPolicyInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import route53_traffic_policy_instance

route53TrafficPolicyInstance.Route53TrafficPolicyInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import route53_traffic_policy_instance

route53TrafficPolicyInstance.Route53TrafficPolicyInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import route53_traffic_policy_instance

route53TrafficPolicyInstance.Route53TrafficPolicyInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.hostedZoneIdInput">hosted_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyIdInput">traffic_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyVersionInput">traffic_policy_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyId">traffic_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyVersion">traffic_policy_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hosted_zone_id_input`<sup>Optional</sup> <a name="hosted_zone_id_input" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.hostedZoneIdInput"></a>

```python
hosted_zone_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `traffic_policy_id_input`<sup>Optional</sup> <a name="traffic_policy_id_input" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyIdInput"></a>

```python
traffic_policy_id_input: str
```

- *Type:* str

---

##### `traffic_policy_version_input`<sup>Optional</sup> <a name="traffic_policy_version_input" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyVersionInput"></a>

```python
traffic_policy_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `traffic_policy_id`<sup>Required</sup> <a name="traffic_policy_id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyId"></a>

```python
traffic_policy_id: str
```

- *Type:* str

---

##### `traffic_policy_version`<sup>Required</sup> <a name="traffic_policy_version" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyVersion"></a>

```python
traffic_policy_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53TrafficPolicyInstanceConfig <a name="Route53TrafficPolicyInstanceConfig" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_traffic_policy_instance

route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hosted_zone_id: str,
  name: str,
  traffic_policy_id: str,
  traffic_policy_version: typing.Union[int, float],
  ttl: typing.Union[int, float],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#hosted_zone_id Route53TrafficPolicyInstance#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#name Route53TrafficPolicyInstance#name}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.trafficPolicyId">traffic_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_id Route53TrafficPolicyInstance#traffic_policy_id}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.trafficPolicyVersion">traffic_policy_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_version Route53TrafficPolicyInstance#traffic_policy_version}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#ttl Route53TrafficPolicyInstance#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#id Route53TrafficPolicyInstance#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#hosted_zone_id Route53TrafficPolicyInstance#hosted_zone_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#name Route53TrafficPolicyInstance#name}.

---

##### `traffic_policy_id`<sup>Required</sup> <a name="traffic_policy_id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.trafficPolicyId"></a>

```python
traffic_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_id Route53TrafficPolicyInstance#traffic_policy_id}.

---

##### `traffic_policy_version`<sup>Required</sup> <a name="traffic_policy_version" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.trafficPolicyVersion"></a>

```python
traffic_policy_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_version Route53TrafficPolicyInstance#traffic_policy_version}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#ttl Route53TrafficPolicyInstance#ttl}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#id Route53TrafficPolicyInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



