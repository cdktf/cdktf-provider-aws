# `loadBalancerBackendServerPolicy` Submodule <a name="`loadBalancerBackendServerPolicy` Submodule" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerBackendServerPolicy <a name="LoadBalancerBackendServerPolicy" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy aws_load_balancer_backend_server_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_backend_server_policy

loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_port: typing.Union[int, float],
  load_balancer_name: str,
  id: str = None,
  policy_names: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.instancePort">instance_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#instance_port LoadBalancerBackendServerPolicy#instance_port}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#load_balancer_name LoadBalancerBackendServerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#id LoadBalancerBackendServerPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#policy_names LoadBalancerBackendServerPolicy#policy_names}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_port`<sup>Required</sup> <a name="instance_port" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.instancePort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#instance_port LoadBalancerBackendServerPolicy#instance_port}.

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.loadBalancerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#load_balancer_name LoadBalancerBackendServerPolicy#load_balancer_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#id LoadBalancerBackendServerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_names`<sup>Optional</sup> <a name="policy_names" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.policyNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#policy_names LoadBalancerBackendServerPolicy#policy_names}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetPolicyNames">reset_policy_names</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_names` <a name="reset_policy_names" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetPolicyNames"></a>

```python
def reset_policy_names() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_backend_server_policy

loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_backend_server_policy

loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_backend_server_policy

loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.instancePortInput">instance_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.loadBalancerNameInput">load_balancer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.policyNamesInput">policy_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.instancePort">instance_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_port_input`<sup>Optional</sup> <a name="instance_port_input" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.instancePortInput"></a>

```python
instance_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_balancer_name_input`<sup>Optional</sup> <a name="load_balancer_name_input" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.loadBalancerNameInput"></a>

```python
load_balancer_name_input: str
```

- *Type:* str

---

##### `policy_names_input`<sup>Optional</sup> <a name="policy_names_input" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.policyNamesInput"></a>

```python
policy_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_port`<sup>Required</sup> <a name="instance_port" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.instancePort"></a>

```python
instance_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.loadBalancerName"></a>

```python
load_balancer_name: str
```

- *Type:* str

---

##### `policy_names`<sup>Required</sup> <a name="policy_names" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.policyNames"></a>

```python
policy_names: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerBackendServerPolicyConfig <a name="LoadBalancerBackendServerPolicyConfig" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import load_balancer_backend_server_policy

loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_port: typing.Union[int, float],
  load_balancer_name: str,
  id: str = None,
  policy_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.instancePort">instance_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#instance_port LoadBalancerBackendServerPolicy#instance_port}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#load_balancer_name LoadBalancerBackendServerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#id LoadBalancerBackendServerPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#policy_names LoadBalancerBackendServerPolicy#policy_names}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_port`<sup>Required</sup> <a name="instance_port" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.instancePort"></a>

```python
instance_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#instance_port LoadBalancerBackendServerPolicy#instance_port}.

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.loadBalancerName"></a>

```python
load_balancer_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#load_balancer_name LoadBalancerBackendServerPolicy#load_balancer_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#id LoadBalancerBackendServerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_names`<sup>Optional</sup> <a name="policy_names" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.policyNames"></a>

```python
policy_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#policy_names LoadBalancerBackendServerPolicy#policy_names}.

---



