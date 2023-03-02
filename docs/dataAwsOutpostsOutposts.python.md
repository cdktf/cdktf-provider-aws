# `dataAwsOutpostsOutposts` Submodule <a name="`dataAwsOutpostsOutposts` Submodule" id="@cdktf/provider-aws.dataAwsOutpostsOutposts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOutpostsOutposts <a name="DataAwsOutpostsOutposts" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts aws_outposts_outposts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_outposts_outposts

dataAwsOutpostsOutposts.DataAwsOutpostsOutposts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str = None,
  availability_zone_id: str = None,
  id: str = None,
  owner_id: str = None,
  site_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#availability_zone DataAwsOutpostsOutposts#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#availability_zone_id DataAwsOutpostsOutposts#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#id DataAwsOutpostsOutposts#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.ownerId">owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#owner_id DataAwsOutpostsOutposts#owner_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.siteId">site_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#site_id DataAwsOutpostsOutposts#site_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#availability_zone DataAwsOutpostsOutposts#availability_zone}.

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.availabilityZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#availability_zone_id DataAwsOutpostsOutposts#availability_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#id DataAwsOutpostsOutposts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner_id`<sup>Optional</sup> <a name="owner_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.ownerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#owner_id DataAwsOutpostsOutposts#owner_id}.

---

##### `site_id`<sup>Optional</sup> <a name="site_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.Initializer.parameter.siteId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#site_id DataAwsOutpostsOutposts#site_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.resetAvailabilityZoneId">reset_availability_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.resetOwnerId">reset_owner_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.resetSiteId">reset_site_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_availability_zone_id` <a name="reset_availability_zone_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.resetAvailabilityZoneId"></a>

```python
def reset_availability_zone_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_owner_id` <a name="reset_owner_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.resetOwnerId"></a>

```python
def reset_owner_id() -> None
```

##### `reset_site_id` <a name="reset_site_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.resetSiteId"></a>

```python
def reset_site_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_outposts_outposts

dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_outposts_outposts

dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_outposts_outposts

dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.arns">arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.ownerIdInput">owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.siteIdInput">site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.siteId">site_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arns`<sup>Required</sup> <a name="arns" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.arns"></a>

```python
arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `owner_id_input`<sup>Optional</sup> <a name="owner_id_input" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.ownerIdInput"></a>

```python
owner_id_input: str
```

- *Type:* str

---

##### `site_id_input`<sup>Optional</sup> <a name="site_id_input" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.siteIdInput"></a>

```python
site_id_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutposts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOutpostsOutpostsConfig <a name="DataAwsOutpostsOutpostsConfig" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_outposts_outposts

dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str = None,
  availability_zone_id: str = None,
  id: str = None,
  owner_id: str = None,
  site_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#availability_zone DataAwsOutpostsOutposts#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#availability_zone_id DataAwsOutpostsOutposts#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#id DataAwsOutpostsOutposts#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.ownerId">owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#owner_id DataAwsOutpostsOutposts#owner_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.siteId">site_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#site_id DataAwsOutpostsOutposts#site_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#availability_zone DataAwsOutpostsOutposts#availability_zone}.

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#availability_zone_id DataAwsOutpostsOutposts#availability_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#id DataAwsOutpostsOutposts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner_id`<sup>Optional</sup> <a name="owner_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#owner_id DataAwsOutpostsOutposts#owner_id}.

---

##### `site_id`<sup>Optional</sup> <a name="site_id" id="@cdktf/provider-aws.dataAwsOutpostsOutposts.DataAwsOutpostsOutpostsConfig.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts#site_id DataAwsOutpostsOutposts#site_id}.

---



