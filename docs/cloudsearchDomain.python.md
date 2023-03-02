# `cloudsearchDomain` Submodule <a name="`cloudsearchDomain` Submodule" id="@cdktf/provider-aws.cloudsearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudsearchDomain <a name="CloudsearchDomain" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain aws_cloudsearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomain(
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
  endpoint_options: CloudsearchDomainEndpointOptions = None,
  id: str = None,
  index_field: typing.Union[IResolvable, typing.List[CloudsearchDomainIndexField]] = None,
  multi_az: typing.Union[bool, IResolvable] = None,
  scaling_parameters: CloudsearchDomainScalingParameters = None,
  timeouts: CloudsearchDomainTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.endpointOptions">endpoint_options</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a></code> | endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#id CloudsearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.indexField">index_field</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>]]</code> | index_field block. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#multi_az CloudsearchDomain#multi_az}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.scalingParameters">scaling_parameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a></code> | scaling_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}.

---

##### `endpoint_options`<sup>Optional</sup> <a name="endpoint_options" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.endpointOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

endpoint_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#endpoint_options CloudsearchDomain#endpoint_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#id CloudsearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_field`<sup>Optional</sup> <a name="index_field" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.indexField"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>]]

index_field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#index_field CloudsearchDomain#index_field}

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.multiAz"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#multi_az CloudsearchDomain#multi_az}.

---

##### `scaling_parameters`<sup>Optional</sup> <a name="scaling_parameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.scalingParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

scaling_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#scaling_parameters CloudsearchDomain#scaling_parameters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#timeouts CloudsearchDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putEndpointOptions">put_endpoint_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putIndexField">put_index_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putScalingParameters">put_scaling_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetEndpointOptions">reset_endpoint_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetIndexField">reset_index_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetMultiAz">reset_multi_az</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetScalingParameters">reset_scaling_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_endpoint_options` <a name="put_endpoint_options" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putEndpointOptions"></a>

```python
def put_endpoint_options(
  enforce_https: typing.Union[bool, IResolvable] = None,
  tls_security_policy: str = None
) -> None
```

###### `enforce_https`<sup>Optional</sup> <a name="enforce_https" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putEndpointOptions.parameter.enforceHttps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#enforce_https CloudsearchDomain#enforce_https}.

---

###### `tls_security_policy`<sup>Optional</sup> <a name="tls_security_policy" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putEndpointOptions.parameter.tlsSecurityPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#tls_security_policy CloudsearchDomain#tls_security_policy}.

---

##### `put_index_field` <a name="put_index_field" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putIndexField"></a>

```python
def put_index_field(
  value: typing.Union[IResolvable, typing.List[CloudsearchDomainIndexField]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putIndexField.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>]]

---

##### `put_scaling_parameters` <a name="put_scaling_parameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putScalingParameters"></a>

```python
def put_scaling_parameters(
  desired_instance_type: str = None,
  desired_partition_count: typing.Union[int, float] = None,
  desired_replication_count: typing.Union[int, float] = None
) -> None
```

###### `desired_instance_type`<sup>Optional</sup> <a name="desired_instance_type" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putScalingParameters.parameter.desiredInstanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_instance_type CloudsearchDomain#desired_instance_type}.

---

###### `desired_partition_count`<sup>Optional</sup> <a name="desired_partition_count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putScalingParameters.parameter.desiredPartitionCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_partition_count CloudsearchDomain#desired_partition_count}.

---

###### `desired_replication_count`<sup>Optional</sup> <a name="desired_replication_count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putScalingParameters.parameter.desiredReplicationCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_replication_count CloudsearchDomain#desired_replication_count}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#create CloudsearchDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#delete CloudsearchDomain#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#update CloudsearchDomain#update}.

---

##### `reset_endpoint_options` <a name="reset_endpoint_options" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetEndpointOptions"></a>

```python
def reset_endpoint_options() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_index_field` <a name="reset_index_field" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetIndexField"></a>

```python
def reset_index_field() -> None
```

##### `reset_multi_az` <a name="reset_multi_az" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetMultiAz"></a>

```python
def reset_multi_az() -> None
```

##### `reset_scaling_parameters` <a name="reset_scaling_parameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetScalingParameters"></a>

```python
def reset_scaling_parameters() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.documentServiceEndpoint">document_service_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.endpointOptions">endpoint_options</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference">CloudsearchDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.indexField">index_field</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList">CloudsearchDomainIndexFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.scalingParameters">scaling_parameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference">CloudsearchDomainScalingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.searchServiceEndpoint">search_service_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference">CloudsearchDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.endpointOptionsInput">endpoint_options_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.indexFieldInput">index_field_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.multiAzInput">multi_az_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.scalingParametersInput">scaling_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `document_service_endpoint`<sup>Required</sup> <a name="document_service_endpoint" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.documentServiceEndpoint"></a>

```python
document_service_endpoint: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `endpoint_options`<sup>Required</sup> <a name="endpoint_options" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.endpointOptions"></a>

```python
endpoint_options: CloudsearchDomainEndpointOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference">CloudsearchDomainEndpointOptionsOutputReference</a>

---

##### `index_field`<sup>Required</sup> <a name="index_field" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.indexField"></a>

```python
index_field: CloudsearchDomainIndexFieldList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList">CloudsearchDomainIndexFieldList</a>

---

##### `scaling_parameters`<sup>Required</sup> <a name="scaling_parameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.scalingParameters"></a>

```python
scaling_parameters: CloudsearchDomainScalingParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference">CloudsearchDomainScalingParametersOutputReference</a>

---

##### `search_service_endpoint`<sup>Required</sup> <a name="search_service_endpoint" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.searchServiceEndpoint"></a>

```python
search_service_endpoint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.timeouts"></a>

```python
timeouts: CloudsearchDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference">CloudsearchDomainTimeoutsOutputReference</a>

---

##### `endpoint_options_input`<sup>Optional</sup> <a name="endpoint_options_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.endpointOptionsInput"></a>

```python
endpoint_options_input: CloudsearchDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_field_input`<sup>Optional</sup> <a name="index_field_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.indexFieldInput"></a>

```python
index_field_input: typing.Union[IResolvable, typing.List[CloudsearchDomainIndexField]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>]]

---

##### `multi_az_input`<sup>Optional</sup> <a name="multi_az_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.multiAzInput"></a>

```python
multi_az_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scaling_parameters_input`<sup>Optional</sup> <a name="scaling_parameters_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.scalingParametersInput"></a>

```python
scaling_parameters_input: CloudsearchDomainScalingParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CloudsearchDomainTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.multiAz"></a>

```python
multi_az: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudsearchDomainConfig <a name="CloudsearchDomainConfig" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  endpoint_options: CloudsearchDomainEndpointOptions = None,
  id: str = None,
  index_field: typing.Union[IResolvable, typing.List[CloudsearchDomainIndexField]] = None,
  multi_az: typing.Union[bool, IResolvable] = None,
  scaling_parameters: CloudsearchDomainScalingParameters = None,
  timeouts: CloudsearchDomainTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.endpointOptions">endpoint_options</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a></code> | endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#id CloudsearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.indexField">index_field</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>]]</code> | index_field block. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#multi_az CloudsearchDomain#multi_az}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.scalingParameters">scaling_parameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a></code> | scaling_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}.

---

##### `endpoint_options`<sup>Optional</sup> <a name="endpoint_options" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.endpointOptions"></a>

```python
endpoint_options: CloudsearchDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

endpoint_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#endpoint_options CloudsearchDomain#endpoint_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#id CloudsearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_field`<sup>Optional</sup> <a name="index_field" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.indexField"></a>

```python
index_field: typing.Union[IResolvable, typing.List[CloudsearchDomainIndexField]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>]]

index_field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#index_field CloudsearchDomain#index_field}

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.multiAz"></a>

```python
multi_az: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#multi_az CloudsearchDomain#multi_az}.

---

##### `scaling_parameters`<sup>Optional</sup> <a name="scaling_parameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.scalingParameters"></a>

```python
scaling_parameters: CloudsearchDomainScalingParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

scaling_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#scaling_parameters CloudsearchDomain#scaling_parameters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainConfig.property.timeouts"></a>

```python
timeouts: CloudsearchDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#timeouts CloudsearchDomain#timeouts}

---

### CloudsearchDomainEndpointOptions <a name="CloudsearchDomainEndpointOptions" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomainEndpointOptions(
  enforce_https: typing.Union[bool, IResolvable] = None,
  tls_security_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.enforceHttps">enforce_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#enforce_https CloudsearchDomain#enforce_https}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.tlsSecurityPolicy">tls_security_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#tls_security_policy CloudsearchDomain#tls_security_policy}. |

---

##### `enforce_https`<sup>Optional</sup> <a name="enforce_https" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.enforceHttps"></a>

```python
enforce_https: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#enforce_https CloudsearchDomain#enforce_https}.

---

##### `tls_security_policy`<sup>Optional</sup> <a name="tls_security_policy" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```python
tls_security_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#tls_security_policy CloudsearchDomain#tls_security_policy}.

---

### CloudsearchDomainIndexField <a name="CloudsearchDomainIndexField" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomainIndexField(
  name: str,
  type: str,
  analysis_scheme: str = None,
  default_value: str = None,
  facet: typing.Union[bool, IResolvable] = None,
  highlight: typing.Union[bool, IResolvable] = None,
  return: typing.Union[bool, IResolvable] = None,
  search: typing.Union[bool, IResolvable] = None,
  sort: typing.Union[bool, IResolvable] = None,
  source_fields: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#type CloudsearchDomain#type}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.analysisScheme">analysis_scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#analysis_scheme CloudsearchDomain#analysis_scheme}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#default_value CloudsearchDomain#default_value}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.facet">facet</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#facet CloudsearchDomain#facet}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.highlight">highlight</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#highlight CloudsearchDomain#highlight}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.return">return</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#return CloudsearchDomain#return}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.search">search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#search CloudsearchDomain#search}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.sort">sort</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#sort CloudsearchDomain#sort}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.sourceFields">source_fields</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#source_fields CloudsearchDomain#source_fields}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#type CloudsearchDomain#type}.

---

##### `analysis_scheme`<sup>Optional</sup> <a name="analysis_scheme" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.analysisScheme"></a>

```python
analysis_scheme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#analysis_scheme CloudsearchDomain#analysis_scheme}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#default_value CloudsearchDomain#default_value}.

---

##### `facet`<sup>Optional</sup> <a name="facet" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.facet"></a>

```python
facet: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#facet CloudsearchDomain#facet}.

---

##### `highlight`<sup>Optional</sup> <a name="highlight" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.highlight"></a>

```python
highlight: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#highlight CloudsearchDomain#highlight}.

---

##### `return`<sup>Optional</sup> <a name="return" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.return"></a>

```python
return: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#return CloudsearchDomain#return}.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.search"></a>

```python
search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#search CloudsearchDomain#search}.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.sort"></a>

```python
sort: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#sort CloudsearchDomain#sort}.

---

##### `source_fields`<sup>Optional</sup> <a name="source_fields" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField.property.sourceFields"></a>

```python
source_fields: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#source_fields CloudsearchDomain#source_fields}.

---

### CloudsearchDomainScalingParameters <a name="CloudsearchDomainScalingParameters" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomainScalingParameters(
  desired_instance_type: str = None,
  desired_partition_count: typing.Union[int, float] = None,
  desired_replication_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredInstanceType">desired_instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_instance_type CloudsearchDomain#desired_instance_type}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredPartitionCount">desired_partition_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_partition_count CloudsearchDomain#desired_partition_count}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredReplicationCount">desired_replication_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_replication_count CloudsearchDomain#desired_replication_count}. |

---

##### `desired_instance_type`<sup>Optional</sup> <a name="desired_instance_type" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredInstanceType"></a>

```python
desired_instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_instance_type CloudsearchDomain#desired_instance_type}.

---

##### `desired_partition_count`<sup>Optional</sup> <a name="desired_partition_count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredPartitionCount"></a>

```python
desired_partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_partition_count CloudsearchDomain#desired_partition_count}.

---

##### `desired_replication_count`<sup>Optional</sup> <a name="desired_replication_count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredReplicationCount"></a>

```python
desired_replication_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_replication_count CloudsearchDomain#desired_replication_count}.

---

### CloudsearchDomainTimeouts <a name="CloudsearchDomainTimeouts" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomainTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#create CloudsearchDomain#create}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#delete CloudsearchDomain#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#update CloudsearchDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#create CloudsearchDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#delete CloudsearchDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#update CloudsearchDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudsearchDomainEndpointOptionsOutputReference <a name="CloudsearchDomainEndpointOptionsOutputReference" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetEnforceHttps">reset_enforce_https</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">reset_tls_security_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enforce_https` <a name="reset_enforce_https" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```python
def reset_enforce_https() -> None
```

##### `reset_tls_security_policy` <a name="reset_tls_security_policy" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```python
def reset_tls_security_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttpsInput">enforce_https_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">tls_security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttps">enforce_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">tls_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforce_https_input`<sup>Optional</sup> <a name="enforce_https_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```python
enforce_https_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_security_policy_input`<sup>Optional</sup> <a name="tls_security_policy_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```python
tls_security_policy_input: str
```

- *Type:* str

---

##### `enforce_https`<sup>Required</sup> <a name="enforce_https" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```python
enforce_https: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_security_policy`<sup>Required</sup> <a name="tls_security_policy" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```python
tls_security_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CloudsearchDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

---


### CloudsearchDomainIndexFieldList <a name="CloudsearchDomainIndexFieldList" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomainIndexFieldList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudsearchDomainIndexFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudsearchDomainIndexField]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>]]

---


### CloudsearchDomainIndexFieldOutputReference <a name="CloudsearchDomainIndexFieldOutputReference" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetAnalysisScheme">reset_analysis_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetFacet">reset_facet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetHighlight">reset_highlight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetReturn">reset_return</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSort">reset_sort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSourceFields">reset_source_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_analysis_scheme` <a name="reset_analysis_scheme" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetAnalysisScheme"></a>

```python
def reset_analysis_scheme() -> None
```

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_facet` <a name="reset_facet" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetFacet"></a>

```python
def reset_facet() -> None
```

##### `reset_highlight` <a name="reset_highlight" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetHighlight"></a>

```python
def reset_highlight() -> None
```

##### `reset_return` <a name="reset_return" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetReturn"></a>

```python
def reset_return() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_sort` <a name="reset_sort" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSort"></a>

```python
def reset_sort() -> None
```

##### `reset_source_fields` <a name="reset_source_fields" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSourceFields"></a>

```python
def reset_source_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisSchemeInput">analysis_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facetInput">facet_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlightInput">highlight_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.returnInput">return_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.searchInput">search_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sortInput">sort_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sourceFieldsInput">source_fields_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisScheme">analysis_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facet">facet</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlight">highlight</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.return">return</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.search">search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sort">sort</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sourceFields">source_fields</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis_scheme_input`<sup>Optional</sup> <a name="analysis_scheme_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisSchemeInput"></a>

```python
analysis_scheme_input: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `facet_input`<sup>Optional</sup> <a name="facet_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facetInput"></a>

```python
facet_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `highlight_input`<sup>Optional</sup> <a name="highlight_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlightInput"></a>

```python
highlight_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `return_input`<sup>Optional</sup> <a name="return_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.returnInput"></a>

```python
return_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.searchInput"></a>

```python
search_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sort_input`<sup>Optional</sup> <a name="sort_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sortInput"></a>

```python
sort_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_fields_input`<sup>Optional</sup> <a name="source_fields_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sourceFieldsInput"></a>

```python
source_fields_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `analysis_scheme`<sup>Required</sup> <a name="analysis_scheme" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisScheme"></a>

```python
analysis_scheme: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `facet`<sup>Required</sup> <a name="facet" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facet"></a>

```python
facet: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `highlight`<sup>Required</sup> <a name="highlight" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlight"></a>

```python
highlight: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `return`<sup>Required</sup> <a name="return" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.return"></a>

```python
return: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.search"></a>

```python
search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sort"></a>

```python
sort: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_fields`<sup>Required</sup> <a name="source_fields" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sourceFields"></a>

```python
source_fields: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudsearchDomainIndexField, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>, cdktf.IResolvable]

---


### CloudsearchDomainScalingParametersOutputReference <a name="CloudsearchDomainScalingParametersOutputReference" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredInstanceType">reset_desired_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredPartitionCount">reset_desired_partition_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredReplicationCount">reset_desired_replication_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_desired_instance_type` <a name="reset_desired_instance_type" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredInstanceType"></a>

```python
def reset_desired_instance_type() -> None
```

##### `reset_desired_partition_count` <a name="reset_desired_partition_count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredPartitionCount"></a>

```python
def reset_desired_partition_count() -> None
```

##### `reset_desired_replication_count` <a name="reset_desired_replication_count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredReplicationCount"></a>

```python
def reset_desired_replication_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceTypeInput">desired_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCountInput">desired_partition_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCountInput">desired_replication_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceType">desired_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCount">desired_partition_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCount">desired_replication_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired_instance_type_input`<sup>Optional</sup> <a name="desired_instance_type_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceTypeInput"></a>

```python
desired_instance_type_input: str
```

- *Type:* str

---

##### `desired_partition_count_input`<sup>Optional</sup> <a name="desired_partition_count_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCountInput"></a>

```python
desired_partition_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_replication_count_input`<sup>Optional</sup> <a name="desired_replication_count_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCountInput"></a>

```python
desired_replication_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_instance_type`<sup>Required</sup> <a name="desired_instance_type" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceType"></a>

```python
desired_instance_type: str
```

- *Type:* str

---

##### `desired_partition_count`<sup>Required</sup> <a name="desired_partition_count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCount"></a>

```python
desired_partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_replication_count`<sup>Required</sup> <a name="desired_replication_count" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCount"></a>

```python
desired_replication_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.internalValue"></a>

```python
internal_value: CloudsearchDomainScalingParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

---


### CloudsearchDomainTimeoutsOutputReference <a name="CloudsearchDomainTimeoutsOutputReference" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain

cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudsearchDomainTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>, cdktf.IResolvable]

---



