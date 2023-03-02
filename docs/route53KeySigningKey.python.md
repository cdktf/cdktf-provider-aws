# `route53KeySigningKey` Submodule <a name="`route53KeySigningKey` Submodule" id="@cdktf/provider-aws.route53KeySigningKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53KeySigningKey <a name="Route53KeySigningKey" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key aws_route53_key_signing_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_key_signing_key

route53KeySigningKey.Route53KeySigningKey(
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
  key_management_service_arn: str,
  name: str,
  id: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.keyManagementServiceArn">key_management_service_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#name Route53KeySigningKey#name}. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#id Route53KeySigningKey#id}. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#status Route53KeySigningKey#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.hostedZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}.

---

##### `key_management_service_arn`<sup>Required</sup> <a name="key_management_service_arn" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.keyManagementServiceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#name Route53KeySigningKey#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#id Route53KeySigningKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#status Route53KeySigningKey#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import route53_key_signing_key

route53KeySigningKey.Route53KeySigningKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import route53_key_signing_key

route53KeySigningKey.Route53KeySigningKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import route53_key_signing_key

route53KeySigningKey.Route53KeySigningKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmMnemonic">digest_algorithm_mnemonic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmType">digest_algorithm_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestValue">digest_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dnskeyRecord">dnskey_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dsRecord">ds_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.flag">flag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyTag">key_tag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmMnemonic">signing_algorithm_mnemonic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmType">signing_algorithm_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneIdInput">hosted_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArnInput">key_management_service_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArn">key_management_service_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `digest_algorithm_mnemonic`<sup>Required</sup> <a name="digest_algorithm_mnemonic" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmMnemonic"></a>

```python
digest_algorithm_mnemonic: str
```

- *Type:* str

---

##### `digest_algorithm_type`<sup>Required</sup> <a name="digest_algorithm_type" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmType"></a>

```python
digest_algorithm_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `digest_value`<sup>Required</sup> <a name="digest_value" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestValue"></a>

```python
digest_value: str
```

- *Type:* str

---

##### `dnskey_record`<sup>Required</sup> <a name="dnskey_record" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dnskeyRecord"></a>

```python
dnskey_record: str
```

- *Type:* str

---

##### `ds_record`<sup>Required</sup> <a name="ds_record" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dsRecord"></a>

```python
ds_record: str
```

- *Type:* str

---

##### `flag`<sup>Required</sup> <a name="flag" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.flag"></a>

```python
flag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_tag`<sup>Required</sup> <a name="key_tag" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyTag"></a>

```python
key_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `signing_algorithm_mnemonic`<sup>Required</sup> <a name="signing_algorithm_mnemonic" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmMnemonic"></a>

```python
signing_algorithm_mnemonic: str
```

- *Type:* str

---

##### `signing_algorithm_type`<sup>Required</sup> <a name="signing_algorithm_type" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmType"></a>

```python
signing_algorithm_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hosted_zone_id_input`<sup>Optional</sup> <a name="hosted_zone_id_input" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneIdInput"></a>

```python
hosted_zone_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_management_service_arn_input`<sup>Optional</sup> <a name="key_management_service_arn_input" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArnInput"></a>

```python
key_management_service_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_management_service_arn`<sup>Required</sup> <a name="key_management_service_arn" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArn"></a>

```python
key_management_service_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53KeySigningKeyConfig <a name="Route53KeySigningKeyConfig" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_key_signing_key

route53KeySigningKey.Route53KeySigningKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hosted_zone_id: str,
  key_management_service_arn: str,
  name: str,
  id: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.keyManagementServiceArn">key_management_service_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#name Route53KeySigningKey#name}. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#id Route53KeySigningKey#id}. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#status Route53KeySigningKey#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}.

---

##### `key_management_service_arn`<sup>Required</sup> <a name="key_management_service_arn" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.keyManagementServiceArn"></a>

```python
key_management_service_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#name Route53KeySigningKey#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#id Route53KeySigningKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#status Route53KeySigningKey#status}.

---



