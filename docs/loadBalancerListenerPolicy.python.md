# `loadBalancerListenerPolicy` Submodule <a name="`loadBalancerListenerPolicy` Submodule" id="@cdktf/provider-aws.loadBalancerListenerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerListenerPolicy <a name="LoadBalancerListenerPolicy" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy aws_load_balancer_listener_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_listener_policy

loadBalancerListenerPolicy.LoadBalancerListenerPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer_name: str,
  load_balancer_port: typing.Union[int, float],
  id: str = None,
  policy_names: typing.List[str] = None,
  triggers: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.loadBalancerPort">load_balancer_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#id LoadBalancerListenerPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#policy_names LoadBalancerListenerPolicy#policy_names}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#triggers LoadBalancerListenerPolicy#triggers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.loadBalancerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}.

---

##### `load_balancer_port`<sup>Required</sup> <a name="load_balancer_port" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.loadBalancerPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#id LoadBalancerListenerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_names`<sup>Optional</sup> <a name="policy_names" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.policyNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#policy_names LoadBalancerListenerPolicy#policy_names}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.triggers"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#triggers LoadBalancerListenerPolicy#triggers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetPolicyNames">reset_policy_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetTriggers">reset_triggers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_names` <a name="reset_policy_names" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetPolicyNames"></a>

```python
def reset_policy_names() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetTriggers"></a>

```python
def reset_triggers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_listener_policy

loadBalancerListenerPolicy.LoadBalancerListenerPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_listener_policy

loadBalancerListenerPolicy.LoadBalancerListenerPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_listener_policy

loadBalancerListenerPolicy.LoadBalancerListenerPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerNameInput">load_balancer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPortInput">load_balancer_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNamesInput">policy_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.triggersInput">triggers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPort">load_balancer_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_name_input`<sup>Optional</sup> <a name="load_balancer_name_input" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerNameInput"></a>

```python
load_balancer_name_input: str
```

- *Type:* str

---

##### `load_balancer_port_input`<sup>Optional</sup> <a name="load_balancer_port_input" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPortInput"></a>

```python
load_balancer_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_names_input`<sup>Optional</sup> <a name="policy_names_input" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNamesInput"></a>

```python
policy_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.triggersInput"></a>

```python
triggers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerName"></a>

```python
load_balancer_name: str
```

- *Type:* str

---

##### `load_balancer_port`<sup>Required</sup> <a name="load_balancer_port" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPort"></a>

```python
load_balancer_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_names`<sup>Required</sup> <a name="policy_names" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNames"></a>

```python
policy_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerListenerPolicyConfig <a name="LoadBalancerListenerPolicyConfig" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_listener_policy

loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer_name: str,
  load_balancer_port: typing.Union[int, float],
  id: str = None,
  policy_names: typing.List[str] = None,
  triggers: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerPort">load_balancer_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#id LoadBalancerListenerPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#policy_names LoadBalancerListenerPolicy#policy_names}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#triggers LoadBalancerListenerPolicy#triggers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerName"></a>

```python
load_balancer_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}.

---

##### `load_balancer_port`<sup>Required</sup> <a name="load_balancer_port" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerPort"></a>

```python
load_balancer_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#id LoadBalancerListenerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_names`<sup>Optional</sup> <a name="policy_names" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.policyNames"></a>

```python
policy_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#policy_names LoadBalancerListenerPolicy#policy_names}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#triggers LoadBalancerListenerPolicy#triggers}.

---



