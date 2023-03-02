# `lightsailLbHttpsRedirectionPolicy` Submodule <a name="`lightsailLbHttpsRedirectionPolicy` Submodule" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailLbHttpsRedirectionPolicy <a name="LightsailLbHttpsRedirectionPolicy" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_https_redirection_policy aws_lightsail_lb_https_redirection_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_lb_https_redirection_policy

lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  lb_name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_https_redirection_policy#enabled LightsailLbHttpsRedirectionPolicy#enabled}. |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.lbName">lb_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_https_redirection_policy#lb_name LightsailLbHttpsRedirectionPolicy#lb_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_https_redirection_policy#id LightsailLbHttpsRedirectionPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_https_redirection_policy#enabled LightsailLbHttpsRedirectionPolicy#enabled}.

---

##### `lb_name`<sup>Required</sup> <a name="lb_name" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.lbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_https_redirection_policy#lb_name LightsailLbHttpsRedirectionPolicy#lb_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_https_redirection_policy#id LightsailLbHttpsRedirectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_lb_https_redirection_policy

lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_lb_https_redirection_policy

lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_lb_https_redirection_policy

lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.lbNameInput">lb_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.lbName">lb_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lb_name_input`<sup>Optional</sup> <a name="lb_name_input" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.lbNameInput"></a>

```python
lb_name_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lb_name`<sup>Required</sup> <a name="lb_name" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.lbName"></a>

```python
lb_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailLbHttpsRedirectionPolicyConfig <a name="LightsailLbHttpsRedirectionPolicyConfig" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_lb_https_redirection_policy

lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  lb_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_https_redirection_policy#enabled LightsailLbHttpsRedirectionPolicy#enabled}. |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.lbName">lb_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_https_redirection_policy#lb_name LightsailLbHttpsRedirectionPolicy#lb_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_https_redirection_policy#id LightsailLbHttpsRedirectionPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_https_redirection_policy#enabled LightsailLbHttpsRedirectionPolicy#enabled}.

---

##### `lb_name`<sup>Required</sup> <a name="lb_name" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.lbName"></a>

```python
lb_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_https_redirection_policy#lb_name LightsailLbHttpsRedirectionPolicy#lb_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailLbHttpsRedirectionPolicy.LightsailLbHttpsRedirectionPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_https_redirection_policy#id LightsailLbHttpsRedirectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



