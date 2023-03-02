# `redshiftHsmConfiguration` Submodule <a name="`redshiftHsmConfiguration` Submodule" id="@cdktf/provider-aws.redshiftHsmConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftHsmConfiguration <a name="RedshiftHsmConfiguration" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration aws_redshift_hsm_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_hsm_configuration

redshiftHsmConfiguration.RedshiftHsmConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  hsm_configuration_identifier: str,
  hsm_ip_address: str,
  hsm_partition_name: str,
  hsm_partition_password: str,
  hsm_server_public_certificate: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#description RedshiftHsmConfiguration#description}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmConfigurationIdentifier">hsm_configuration_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_configuration_identifier RedshiftHsmConfiguration#hsm_configuration_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmIpAddress">hsm_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_ip_address RedshiftHsmConfiguration#hsm_ip_address}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmPartitionName">hsm_partition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_name RedshiftHsmConfiguration#hsm_partition_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmPartitionPassword">hsm_partition_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_password RedshiftHsmConfiguration#hsm_partition_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmServerPublicCertificate">hsm_server_public_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_server_public_certificate RedshiftHsmConfiguration#hsm_server_public_certificate}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#id RedshiftHsmConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags RedshiftHsmConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags_all RedshiftHsmConfiguration#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#description RedshiftHsmConfiguration#description}.

---

##### `hsm_configuration_identifier`<sup>Required</sup> <a name="hsm_configuration_identifier" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmConfigurationIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_configuration_identifier RedshiftHsmConfiguration#hsm_configuration_identifier}.

---

##### `hsm_ip_address`<sup>Required</sup> <a name="hsm_ip_address" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_ip_address RedshiftHsmConfiguration#hsm_ip_address}.

---

##### `hsm_partition_name`<sup>Required</sup> <a name="hsm_partition_name" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmPartitionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_name RedshiftHsmConfiguration#hsm_partition_name}.

---

##### `hsm_partition_password`<sup>Required</sup> <a name="hsm_partition_password" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmPartitionPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_password RedshiftHsmConfiguration#hsm_partition_password}.

---

##### `hsm_server_public_certificate`<sup>Required</sup> <a name="hsm_server_public_certificate" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmServerPublicCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_server_public_certificate RedshiftHsmConfiguration#hsm_server_public_certificate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#id RedshiftHsmConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags RedshiftHsmConfiguration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags_all RedshiftHsmConfiguration#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import redshift_hsm_configuration

redshiftHsmConfiguration.RedshiftHsmConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import redshift_hsm_configuration

redshiftHsmConfiguration.RedshiftHsmConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import redshift_hsm_configuration

redshiftHsmConfiguration.RedshiftHsmConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmConfigurationIdentifierInput">hsm_configuration_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmIpAddressInput">hsm_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionNameInput">hsm_partition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionPasswordInput">hsm_partition_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmServerPublicCertificateInput">hsm_server_public_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmConfigurationIdentifier">hsm_configuration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmIpAddress">hsm_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionName">hsm_partition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionPassword">hsm_partition_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmServerPublicCertificate">hsm_server_public_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hsm_configuration_identifier_input`<sup>Optional</sup> <a name="hsm_configuration_identifier_input" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmConfigurationIdentifierInput"></a>

```python
hsm_configuration_identifier_input: str
```

- *Type:* str

---

##### `hsm_ip_address_input`<sup>Optional</sup> <a name="hsm_ip_address_input" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmIpAddressInput"></a>

```python
hsm_ip_address_input: str
```

- *Type:* str

---

##### `hsm_partition_name_input`<sup>Optional</sup> <a name="hsm_partition_name_input" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionNameInput"></a>

```python
hsm_partition_name_input: str
```

- *Type:* str

---

##### `hsm_partition_password_input`<sup>Optional</sup> <a name="hsm_partition_password_input" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionPasswordInput"></a>

```python
hsm_partition_password_input: str
```

- *Type:* str

---

##### `hsm_server_public_certificate_input`<sup>Optional</sup> <a name="hsm_server_public_certificate_input" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmServerPublicCertificateInput"></a>

```python
hsm_server_public_certificate_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hsm_configuration_identifier`<sup>Required</sup> <a name="hsm_configuration_identifier" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmConfigurationIdentifier"></a>

```python
hsm_configuration_identifier: str
```

- *Type:* str

---

##### `hsm_ip_address`<sup>Required</sup> <a name="hsm_ip_address" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmIpAddress"></a>

```python
hsm_ip_address: str
```

- *Type:* str

---

##### `hsm_partition_name`<sup>Required</sup> <a name="hsm_partition_name" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionName"></a>

```python
hsm_partition_name: str
```

- *Type:* str

---

##### `hsm_partition_password`<sup>Required</sup> <a name="hsm_partition_password" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionPassword"></a>

```python
hsm_partition_password: str
```

- *Type:* str

---

##### `hsm_server_public_certificate`<sup>Required</sup> <a name="hsm_server_public_certificate" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmServerPublicCertificate"></a>

```python
hsm_server_public_certificate: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftHsmConfigurationConfig <a name="RedshiftHsmConfigurationConfig" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_hsm_configuration

redshiftHsmConfiguration.RedshiftHsmConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  hsm_configuration_identifier: str,
  hsm_ip_address: str,
  hsm_partition_name: str,
  hsm_partition_password: str,
  hsm_server_public_certificate: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#description RedshiftHsmConfiguration#description}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmConfigurationIdentifier">hsm_configuration_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_configuration_identifier RedshiftHsmConfiguration#hsm_configuration_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmIpAddress">hsm_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_ip_address RedshiftHsmConfiguration#hsm_ip_address}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmPartitionName">hsm_partition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_name RedshiftHsmConfiguration#hsm_partition_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmPartitionPassword">hsm_partition_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_password RedshiftHsmConfiguration#hsm_partition_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmServerPublicCertificate">hsm_server_public_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_server_public_certificate RedshiftHsmConfiguration#hsm_server_public_certificate}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#id RedshiftHsmConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags RedshiftHsmConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags_all RedshiftHsmConfiguration#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#description RedshiftHsmConfiguration#description}.

---

##### `hsm_configuration_identifier`<sup>Required</sup> <a name="hsm_configuration_identifier" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmConfigurationIdentifier"></a>

```python
hsm_configuration_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_configuration_identifier RedshiftHsmConfiguration#hsm_configuration_identifier}.

---

##### `hsm_ip_address`<sup>Required</sup> <a name="hsm_ip_address" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmIpAddress"></a>

```python
hsm_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_ip_address RedshiftHsmConfiguration#hsm_ip_address}.

---

##### `hsm_partition_name`<sup>Required</sup> <a name="hsm_partition_name" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmPartitionName"></a>

```python
hsm_partition_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_name RedshiftHsmConfiguration#hsm_partition_name}.

---

##### `hsm_partition_password`<sup>Required</sup> <a name="hsm_partition_password" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmPartitionPassword"></a>

```python
hsm_partition_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_password RedshiftHsmConfiguration#hsm_partition_password}.

---

##### `hsm_server_public_certificate`<sup>Required</sup> <a name="hsm_server_public_certificate" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmServerPublicCertificate"></a>

```python
hsm_server_public_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_server_public_certificate RedshiftHsmConfiguration#hsm_server_public_certificate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#id RedshiftHsmConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags RedshiftHsmConfiguration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags_all RedshiftHsmConfiguration#tags_all}.

---



