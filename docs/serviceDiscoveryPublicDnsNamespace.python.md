# `serviceDiscoveryPublicDnsNamespace` Submodule <a name="`serviceDiscoveryPublicDnsNamespace` Submodule" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDiscoveryPublicDnsNamespace <a name="ServiceDiscoveryPublicDnsNamespace" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace aws_service_discovery_public_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_public_dns_namespace

serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace(
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
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#name ServiceDiscoveryPublicDnsNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#description ServiceDiscoveryPublicDnsNamespace#description}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#id ServiceDiscoveryPublicDnsNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#tags ServiceDiscoveryPublicDnsNamespace#tags}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#tags_all ServiceDiscoveryPublicDnsNamespace#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#name ServiceDiscoveryPublicDnsNamespace#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#description ServiceDiscoveryPublicDnsNamespace#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#id ServiceDiscoveryPublicDnsNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#tags ServiceDiscoveryPublicDnsNamespace#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#tags_all ServiceDiscoveryPublicDnsNamespace#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_public_dns_namespace

serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_public_dns_namespace

serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_public_dns_namespace

serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.hostedZone">hosted_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `hosted_zone`<sup>Required</sup> <a name="hosted_zone" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.hostedZone"></a>

```python
hosted_zone: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDiscoveryPublicDnsNamespaceConfig <a name="ServiceDiscoveryPublicDnsNamespaceConfig" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_public_dns_namespace

serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#name ServiceDiscoveryPublicDnsNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#description ServiceDiscoveryPublicDnsNamespace#description}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#id ServiceDiscoveryPublicDnsNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#tags ServiceDiscoveryPublicDnsNamespace#tags}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#tags_all ServiceDiscoveryPublicDnsNamespace#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#name ServiceDiscoveryPublicDnsNamespace#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#description ServiceDiscoveryPublicDnsNamespace#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#id ServiceDiscoveryPublicDnsNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#tags ServiceDiscoveryPublicDnsNamespace#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#tags_all ServiceDiscoveryPublicDnsNamespace#tags_all}.

---



