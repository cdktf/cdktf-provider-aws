# `loadBalancerPolicy` Submodule <a name="`loadBalancerPolicy` Submodule" id="@cdktf/provider-aws.loadBalancerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerPolicy <a name="LoadBalancerPolicy" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy aws_load_balancer_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_policy

loadBalancerPolicy.LoadBalancerPolicy(
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
  policy_name: str,
  policy_type_name: str,
  id: str = None,
  policy_attribute: typing.Union[IResolvable, typing.List[LoadBalancerPolicyPolicyAttribute]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#load_balancer_name LoadBalancerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_name LoadBalancerPolicy#policy_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.policyTypeName">policy_type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_type_name LoadBalancerPolicy#policy_type_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#id LoadBalancerPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.policyAttribute">policy_attribute</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>]]</code> | policy_attribute block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.loadBalancerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#load_balancer_name LoadBalancerPolicy#load_balancer_name}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.policyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_name LoadBalancerPolicy#policy_name}.

---

##### `policy_type_name`<sup>Required</sup> <a name="policy_type_name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.policyTypeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_type_name LoadBalancerPolicy#policy_type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#id LoadBalancerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_attribute`<sup>Optional</sup> <a name="policy_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.policyAttribute"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>]]

policy_attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_attribute LoadBalancerPolicy#policy_attribute}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.putPolicyAttribute">put_policy_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetPolicyAttribute">reset_policy_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_policy_attribute` <a name="put_policy_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.putPolicyAttribute"></a>

```python
def put_policy_attribute(
  value: typing.Union[IResolvable, typing.List[LoadBalancerPolicyPolicyAttribute]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.putPolicyAttribute.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_attribute` <a name="reset_policy_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetPolicyAttribute"></a>

```python
def reset_policy_attribute() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_policy

loadBalancerPolicy.LoadBalancerPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_policy

loadBalancerPolicy.LoadBalancerPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_policy

loadBalancerPolicy.LoadBalancerPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyAttribute">policy_attribute</a></code> | <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList">LoadBalancerPolicyPolicyAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.loadBalancerNameInput">load_balancer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyAttributeInput">policy_attribute_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyTypeNameInput">policy_type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyTypeName">policy_type_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_attribute`<sup>Required</sup> <a name="policy_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyAttribute"></a>

```python
policy_attribute: LoadBalancerPolicyPolicyAttributeList
```

- *Type:* <a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList">LoadBalancerPolicyPolicyAttributeList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_name_input`<sup>Optional</sup> <a name="load_balancer_name_input" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.loadBalancerNameInput"></a>

```python
load_balancer_name_input: str
```

- *Type:* str

---

##### `policy_attribute_input`<sup>Optional</sup> <a name="policy_attribute_input" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyAttributeInput"></a>

```python
policy_attribute_input: typing.Union[IResolvable, typing.List[LoadBalancerPolicyPolicyAttribute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>]]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `policy_type_name_input`<sup>Optional</sup> <a name="policy_type_name_input" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyTypeNameInput"></a>

```python
policy_type_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.loadBalancerName"></a>

```python
load_balancer_name: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `policy_type_name`<sup>Required</sup> <a name="policy_type_name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyTypeName"></a>

```python
policy_type_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerPolicyConfig <a name="LoadBalancerPolicyConfig" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_policy

loadBalancerPolicy.LoadBalancerPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer_name: str,
  policy_name: str,
  policy_type_name: str,
  id: str = None,
  policy_attribute: typing.Union[IResolvable, typing.List[LoadBalancerPolicyPolicyAttribute]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#load_balancer_name LoadBalancerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_name LoadBalancerPolicy#policy_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyTypeName">policy_type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_type_name LoadBalancerPolicy#policy_type_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#id LoadBalancerPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyAttribute">policy_attribute</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>]]</code> | policy_attribute block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.loadBalancerName"></a>

```python
load_balancer_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#load_balancer_name LoadBalancerPolicy#load_balancer_name}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_name LoadBalancerPolicy#policy_name}.

---

##### `policy_type_name`<sup>Required</sup> <a name="policy_type_name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyTypeName"></a>

```python
policy_type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_type_name LoadBalancerPolicy#policy_type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#id LoadBalancerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_attribute`<sup>Optional</sup> <a name="policy_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyAttribute"></a>

```python
policy_attribute: typing.Union[IResolvable, typing.List[LoadBalancerPolicyPolicyAttribute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>]]

policy_attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_attribute LoadBalancerPolicy#policy_attribute}

---

### LoadBalancerPolicyPolicyAttribute <a name="LoadBalancerPolicyPolicyAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_policy

loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#name LoadBalancerPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#value LoadBalancerPolicy#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#name LoadBalancerPolicy#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#value LoadBalancerPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerPolicyPolicyAttributeList <a name="LoadBalancerPolicyPolicyAttributeList" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_policy

loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerPolicyPolicyAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadBalancerPolicyPolicyAttribute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>]]

---


### LoadBalancerPolicyPolicyAttributeOutputReference <a name="LoadBalancerPolicyPolicyAttributeOutputReference" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_policy

loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LoadBalancerPolicyPolicyAttribute, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>, cdktf.IResolvable]

---



