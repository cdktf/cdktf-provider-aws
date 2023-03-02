# `s3BucketWebsiteConfiguration` Submodule <a name="`s3BucketWebsiteConfiguration` Submodule" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketWebsiteConfiguration <a name="S3BucketWebsiteConfiguration" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration aws_s3_bucket_website_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  error_document: S3BucketWebsiteConfigurationErrorDocument = None,
  expected_bucket_owner: str = None,
  id: str = None,
  index_document: S3BucketWebsiteConfigurationIndexDocument = None,
  redirect_all_requests_to: S3BucketWebsiteConfigurationRedirectAllRequestsTo = None,
  routing_rule: typing.Union[IResolvable, typing.List[S3BucketWebsiteConfigurationRoutingRule]] = None,
  routing_rules: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#bucket S3BucketWebsiteConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.errorDocument">error_document</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a></code> | error_document block. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#expected_bucket_owner S3BucketWebsiteConfiguration#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#id S3BucketWebsiteConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.indexDocument">index_document</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a></code> | index_document block. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.redirectAllRequestsTo">redirect_all_requests_to</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a></code> | redirect_all_requests_to block. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.routingRule">routing_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>]]</code> | routing_rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.routingRules">routing_rules</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#routing_rules S3BucketWebsiteConfiguration#routing_rules}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#bucket S3BucketWebsiteConfiguration#bucket}.

---

##### `error_document`<sup>Optional</sup> <a name="error_document" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.errorDocument"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a>

error_document block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#error_document S3BucketWebsiteConfiguration#error_document}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#expected_bucket_owner S3BucketWebsiteConfiguration#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#id S3BucketWebsiteConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_document`<sup>Optional</sup> <a name="index_document" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.indexDocument"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a>

index_document block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#index_document S3BucketWebsiteConfiguration#index_document}

---

##### `redirect_all_requests_to`<sup>Optional</sup> <a name="redirect_all_requests_to" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.redirectAllRequestsTo"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a>

redirect_all_requests_to block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#redirect_all_requests_to S3BucketWebsiteConfiguration#redirect_all_requests_to}

---

##### `routing_rule`<sup>Optional</sup> <a name="routing_rule" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.routingRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>]]

routing_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#routing_rule S3BucketWebsiteConfiguration#routing_rule}

---

##### `routing_rules`<sup>Optional</sup> <a name="routing_rules" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.routingRules"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#routing_rules S3BucketWebsiteConfiguration#routing_rules}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putErrorDocument">put_error_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putIndexDocument">put_index_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRedirectAllRequestsTo">put_redirect_all_requests_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRoutingRule">put_routing_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetErrorDocument">reset_error_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetIndexDocument">reset_index_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRedirectAllRequestsTo">reset_redirect_all_requests_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRoutingRule">reset_routing_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRoutingRules">reset_routing_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_error_document` <a name="put_error_document" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putErrorDocument"></a>

```python
def put_error_document(
  key: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putErrorDocument.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#key S3BucketWebsiteConfiguration#key}.

---

##### `put_index_document` <a name="put_index_document" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putIndexDocument"></a>

```python
def put_index_document(
  suffix: str
) -> None
```

###### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putIndexDocument.parameter.suffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#suffix S3BucketWebsiteConfiguration#suffix}.

---

##### `put_redirect_all_requests_to` <a name="put_redirect_all_requests_to" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRedirectAllRequestsTo"></a>

```python
def put_redirect_all_requests_to(
  host_name: str,
  protocol: str = None
) -> None
```

###### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRedirectAllRequestsTo.parameter.hostName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRedirectAllRequestsTo.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}.

---

##### `put_routing_rule` <a name="put_routing_rule" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRoutingRule"></a>

```python
def put_routing_rule(
  value: typing.Union[IResolvable, typing.List[S3BucketWebsiteConfigurationRoutingRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRoutingRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>]]

---

##### `reset_error_document` <a name="reset_error_document" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetErrorDocument"></a>

```python
def reset_error_document() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_index_document` <a name="reset_index_document" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetIndexDocument"></a>

```python
def reset_index_document() -> None
```

##### `reset_redirect_all_requests_to` <a name="reset_redirect_all_requests_to" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRedirectAllRequestsTo"></a>

```python
def reset_redirect_all_requests_to() -> None
```

##### `reset_routing_rule` <a name="reset_routing_rule" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRoutingRule"></a>

```python
def reset_routing_rule() -> None
```

##### `reset_routing_rules` <a name="reset_routing_rules" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRoutingRules"></a>

```python
def reset_routing_rules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.errorDocument">error_document</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference">S3BucketWebsiteConfigurationErrorDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.indexDocument">index_document</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference">S3BucketWebsiteConfigurationIndexDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.redirectAllRequestsTo">redirect_all_requests_to</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference">S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRule">routing_rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList">S3BucketWebsiteConfigurationRoutingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.websiteDomain">website_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.websiteEndpoint">website_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.errorDocumentInput">error_document_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.indexDocumentInput">index_document_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.redirectAllRequestsToInput">redirect_all_requests_to_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRuleInput">routing_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRulesInput">routing_rules_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRules">routing_rules</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `error_document`<sup>Required</sup> <a name="error_document" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.errorDocument"></a>

```python
error_document: S3BucketWebsiteConfigurationErrorDocumentOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference">S3BucketWebsiteConfigurationErrorDocumentOutputReference</a>

---

##### `index_document`<sup>Required</sup> <a name="index_document" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.indexDocument"></a>

```python
index_document: S3BucketWebsiteConfigurationIndexDocumentOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference">S3BucketWebsiteConfigurationIndexDocumentOutputReference</a>

---

##### `redirect_all_requests_to`<sup>Required</sup> <a name="redirect_all_requests_to" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.redirectAllRequestsTo"></a>

```python
redirect_all_requests_to: S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference">S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference</a>

---

##### `routing_rule`<sup>Required</sup> <a name="routing_rule" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRule"></a>

```python
routing_rule: S3BucketWebsiteConfigurationRoutingRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList">S3BucketWebsiteConfigurationRoutingRuleList</a>

---

##### `website_domain`<sup>Required</sup> <a name="website_domain" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.websiteDomain"></a>

```python
website_domain: str
```

- *Type:* str

---

##### `website_endpoint`<sup>Required</sup> <a name="website_endpoint" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.websiteEndpoint"></a>

```python
website_endpoint: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `error_document_input`<sup>Optional</sup> <a name="error_document_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.errorDocumentInput"></a>

```python
error_document_input: S3BucketWebsiteConfigurationErrorDocument
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a>

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_document_input`<sup>Optional</sup> <a name="index_document_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.indexDocumentInput"></a>

```python
index_document_input: S3BucketWebsiteConfigurationIndexDocument
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a>

---

##### `redirect_all_requests_to_input`<sup>Optional</sup> <a name="redirect_all_requests_to_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.redirectAllRequestsToInput"></a>

```python
redirect_all_requests_to_input: S3BucketWebsiteConfigurationRedirectAllRequestsTo
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a>

---

##### `routing_rule_input`<sup>Optional</sup> <a name="routing_rule_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRuleInput"></a>

```python
routing_rule_input: typing.Union[IResolvable, typing.List[S3BucketWebsiteConfigurationRoutingRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>]]

---

##### `routing_rules_input`<sup>Optional</sup> <a name="routing_rules_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRulesInput"></a>

```python
routing_rules_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `routing_rules`<sup>Required</sup> <a name="routing_rules" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRules"></a>

```python
routing_rules: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketWebsiteConfigurationConfig <a name="S3BucketWebsiteConfigurationConfig" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  error_document: S3BucketWebsiteConfigurationErrorDocument = None,
  expected_bucket_owner: str = None,
  id: str = None,
  index_document: S3BucketWebsiteConfigurationIndexDocument = None,
  redirect_all_requests_to: S3BucketWebsiteConfigurationRedirectAllRequestsTo = None,
  routing_rule: typing.Union[IResolvable, typing.List[S3BucketWebsiteConfigurationRoutingRule]] = None,
  routing_rules: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#bucket S3BucketWebsiteConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.errorDocument">error_document</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a></code> | error_document block. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#expected_bucket_owner S3BucketWebsiteConfiguration#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#id S3BucketWebsiteConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.indexDocument">index_document</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a></code> | index_document block. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.redirectAllRequestsTo">redirect_all_requests_to</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a></code> | redirect_all_requests_to block. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.routingRule">routing_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>]]</code> | routing_rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.routingRules">routing_rules</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#routing_rules S3BucketWebsiteConfiguration#routing_rules}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#bucket S3BucketWebsiteConfiguration#bucket}.

---

##### `error_document`<sup>Optional</sup> <a name="error_document" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.errorDocument"></a>

```python
error_document: S3BucketWebsiteConfigurationErrorDocument
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a>

error_document block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#error_document S3BucketWebsiteConfiguration#error_document}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#expected_bucket_owner S3BucketWebsiteConfiguration#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#id S3BucketWebsiteConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_document`<sup>Optional</sup> <a name="index_document" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.indexDocument"></a>

```python
index_document: S3BucketWebsiteConfigurationIndexDocument
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a>

index_document block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#index_document S3BucketWebsiteConfiguration#index_document}

---

##### `redirect_all_requests_to`<sup>Optional</sup> <a name="redirect_all_requests_to" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.redirectAllRequestsTo"></a>

```python
redirect_all_requests_to: S3BucketWebsiteConfigurationRedirectAllRequestsTo
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a>

redirect_all_requests_to block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#redirect_all_requests_to S3BucketWebsiteConfiguration#redirect_all_requests_to}

---

##### `routing_rule`<sup>Optional</sup> <a name="routing_rule" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.routingRule"></a>

```python
routing_rule: typing.Union[IResolvable, typing.List[S3BucketWebsiteConfigurationRoutingRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>]]

routing_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#routing_rule S3BucketWebsiteConfiguration#routing_rule}

---

##### `routing_rules`<sup>Optional</sup> <a name="routing_rules" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.routingRules"></a>

```python
routing_rules: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#routing_rules S3BucketWebsiteConfiguration#routing_rules}.

---

### S3BucketWebsiteConfigurationErrorDocument <a name="S3BucketWebsiteConfigurationErrorDocument" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument(
  key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#key S3BucketWebsiteConfiguration#key}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#key S3BucketWebsiteConfiguration#key}.

---

### S3BucketWebsiteConfigurationIndexDocument <a name="S3BucketWebsiteConfigurationIndexDocument" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument(
  suffix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument.property.suffix">suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#suffix S3BucketWebsiteConfiguration#suffix}. |

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#suffix S3BucketWebsiteConfiguration#suffix}.

---

### S3BucketWebsiteConfigurationRedirectAllRequestsTo <a name="S3BucketWebsiteConfigurationRedirectAllRequestsTo" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo(
  host_name: str,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}. |

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}.

---

### S3BucketWebsiteConfigurationRoutingRule <a name="S3BucketWebsiteConfigurationRoutingRule" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule(
  redirect: S3BucketWebsiteConfigurationRoutingRuleRedirect,
  condition: S3BucketWebsiteConfigurationRoutingRuleCondition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a></code> | condition block. |

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.property.redirect"></a>

```python
redirect: S3BucketWebsiteConfigurationRoutingRuleRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#redirect S3BucketWebsiteConfiguration#redirect}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.property.condition"></a>

```python
condition: S3BucketWebsiteConfigurationRoutingRuleCondition
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#condition S3BucketWebsiteConfiguration#condition}

---

### S3BucketWebsiteConfigurationRoutingRuleCondition <a name="S3BucketWebsiteConfigurationRoutingRuleCondition" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition(
  http_error_code_returned_equals: str = None,
  key_prefix_equals: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.property.httpErrorCodeReturnedEquals">http_error_code_returned_equals</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#http_error_code_returned_equals S3BucketWebsiteConfiguration#http_error_code_returned_equals}. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.property.keyPrefixEquals">key_prefix_equals</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#key_prefix_equals S3BucketWebsiteConfiguration#key_prefix_equals}. |

---

##### `http_error_code_returned_equals`<sup>Optional</sup> <a name="http_error_code_returned_equals" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.property.httpErrorCodeReturnedEquals"></a>

```python
http_error_code_returned_equals: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#http_error_code_returned_equals S3BucketWebsiteConfiguration#http_error_code_returned_equals}.

---

##### `key_prefix_equals`<sup>Optional</sup> <a name="key_prefix_equals" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.property.keyPrefixEquals"></a>

```python
key_prefix_equals: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#key_prefix_equals S3BucketWebsiteConfiguration#key_prefix_equals}.

---

### S3BucketWebsiteConfigurationRoutingRuleRedirect <a name="S3BucketWebsiteConfigurationRoutingRuleRedirect" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect(
  host_name: str = None,
  http_redirect_code: str = None,
  protocol: str = None,
  replace_key_prefix_with: str = None,
  replace_key_with: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.httpRedirectCode">http_redirect_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#http_redirect_code S3BucketWebsiteConfiguration#http_redirect_code}. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.replaceKeyPrefixWith">replace_key_prefix_with</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#replace_key_prefix_with S3BucketWebsiteConfiguration#replace_key_prefix_with}. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.replaceKeyWith">replace_key_with</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#replace_key_with S3BucketWebsiteConfiguration#replace_key_with}. |

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}.

---

##### `http_redirect_code`<sup>Optional</sup> <a name="http_redirect_code" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.httpRedirectCode"></a>

```python
http_redirect_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#http_redirect_code S3BucketWebsiteConfiguration#http_redirect_code}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}.

---

##### `replace_key_prefix_with`<sup>Optional</sup> <a name="replace_key_prefix_with" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.replaceKeyPrefixWith"></a>

```python
replace_key_prefix_with: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#replace_key_prefix_with S3BucketWebsiteConfiguration#replace_key_prefix_with}.

---

##### `replace_key_with`<sup>Optional</sup> <a name="replace_key_with" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.replaceKeyWith"></a>

```python
replace_key_with: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#replace_key_with S3BucketWebsiteConfiguration#replace_key_with}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketWebsiteConfigurationErrorDocumentOutputReference <a name="S3BucketWebsiteConfigurationErrorDocumentOutputReference" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketWebsiteConfigurationErrorDocument
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a>

---


### S3BucketWebsiteConfigurationIndexDocumentOutputReference <a name="S3BucketWebsiteConfigurationIndexDocumentOutputReference" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketWebsiteConfigurationIndexDocument
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a>

---


### S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference <a name="S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketWebsiteConfigurationRedirectAllRequestsTo
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a>

---


### S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference <a name="S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resetHttpErrorCodeReturnedEquals">reset_http_error_code_returned_equals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resetKeyPrefixEquals">reset_key_prefix_equals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_error_code_returned_equals` <a name="reset_http_error_code_returned_equals" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resetHttpErrorCodeReturnedEquals"></a>

```python
def reset_http_error_code_returned_equals() -> None
```

##### `reset_key_prefix_equals` <a name="reset_key_prefix_equals" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resetKeyPrefixEquals"></a>

```python
def reset_key_prefix_equals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.httpErrorCodeReturnedEqualsInput">http_error_code_returned_equals_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.keyPrefixEqualsInput">key_prefix_equals_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.httpErrorCodeReturnedEquals">http_error_code_returned_equals</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.keyPrefixEquals">key_prefix_equals</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_error_code_returned_equals_input`<sup>Optional</sup> <a name="http_error_code_returned_equals_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.httpErrorCodeReturnedEqualsInput"></a>

```python
http_error_code_returned_equals_input: str
```

- *Type:* str

---

##### `key_prefix_equals_input`<sup>Optional</sup> <a name="key_prefix_equals_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.keyPrefixEqualsInput"></a>

```python
key_prefix_equals_input: str
```

- *Type:* str

---

##### `http_error_code_returned_equals`<sup>Required</sup> <a name="http_error_code_returned_equals" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.httpErrorCodeReturnedEquals"></a>

```python
http_error_code_returned_equals: str
```

- *Type:* str

---

##### `key_prefix_equals`<sup>Required</sup> <a name="key_prefix_equals" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.keyPrefixEquals"></a>

```python
key_prefix_equals: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketWebsiteConfigurationRoutingRuleCondition
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a>

---


### S3BucketWebsiteConfigurationRoutingRuleList <a name="S3BucketWebsiteConfigurationRoutingRuleList" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketWebsiteConfigurationRoutingRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketWebsiteConfigurationRoutingRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>]]

---


### S3BucketWebsiteConfigurationRoutingRuleOutputReference <a name="S3BucketWebsiteConfigurationRoutingRuleOutputReference" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putRedirect">put_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resetCondition">reset_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putCondition"></a>

```python
def put_condition(
  http_error_code_returned_equals: str = None,
  key_prefix_equals: str = None
) -> None
```

###### `http_error_code_returned_equals`<sup>Optional</sup> <a name="http_error_code_returned_equals" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putCondition.parameter.httpErrorCodeReturnedEquals"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#http_error_code_returned_equals S3BucketWebsiteConfiguration#http_error_code_returned_equals}.

---

###### `key_prefix_equals`<sup>Optional</sup> <a name="key_prefix_equals" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putCondition.parameter.keyPrefixEquals"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#key_prefix_equals S3BucketWebsiteConfiguration#key_prefix_equals}.

---

##### `put_redirect` <a name="put_redirect" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putRedirect"></a>

```python
def put_redirect(
  host_name: str = None,
  http_redirect_code: str = None,
  protocol: str = None,
  replace_key_prefix_with: str = None,
  replace_key_with: str = None
) -> None
```

###### `host_name`<sup>Optional</sup> <a name="host_name" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putRedirect.parameter.hostName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}.

---

###### `http_redirect_code`<sup>Optional</sup> <a name="http_redirect_code" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putRedirect.parameter.httpRedirectCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#http_redirect_code S3BucketWebsiteConfiguration#http_redirect_code}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putRedirect.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}.

---

###### `replace_key_prefix_with`<sup>Optional</sup> <a name="replace_key_prefix_with" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putRedirect.parameter.replaceKeyPrefixWith"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#replace_key_prefix_with S3BucketWebsiteConfiguration#replace_key_prefix_with}.

---

###### `replace_key_with`<sup>Optional</sup> <a name="replace_key_with" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putRedirect.parameter.replaceKeyWith"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#replace_key_with S3BucketWebsiteConfiguration#replace_key_with}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference">S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference">S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.redirectInput">redirect_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.condition"></a>

```python
condition: S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference">S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.redirect"></a>

```python
redirect: S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference">S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.conditionInput"></a>

```python
condition_input: S3BucketWebsiteConfigurationRoutingRuleCondition
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a>

---

##### `redirect_input`<sup>Optional</sup> <a name="redirect_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.redirectInput"></a>

```python
redirect_input: S3BucketWebsiteConfigurationRoutingRuleRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketWebsiteConfigurationRoutingRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>, cdktf.IResolvable]

---


### S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference <a name="S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_website_configuration

s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetHostName">reset_host_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetHttpRedirectCode">reset_http_redirect_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetReplaceKeyPrefixWith">reset_replace_key_prefix_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetReplaceKeyWith">reset_replace_key_with</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host_name` <a name="reset_host_name" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetHostName"></a>

```python
def reset_host_name() -> None
```

##### `reset_http_redirect_code` <a name="reset_http_redirect_code" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetHttpRedirectCode"></a>

```python
def reset_http_redirect_code() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_replace_key_prefix_with` <a name="reset_replace_key_prefix_with" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetReplaceKeyPrefixWith"></a>

```python
def reset_replace_key_prefix_with() -> None
```

##### `reset_replace_key_with` <a name="reset_replace_key_with" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetReplaceKeyWith"></a>

```python
def reset_replace_key_with() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.httpRedirectCodeInput">http_redirect_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyPrefixWithInput">replace_key_prefix_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyWithInput">replace_key_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.httpRedirectCode">http_redirect_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyPrefixWith">replace_key_prefix_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyWith">replace_key_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `http_redirect_code_input`<sup>Optional</sup> <a name="http_redirect_code_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.httpRedirectCodeInput"></a>

```python
http_redirect_code_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `replace_key_prefix_with_input`<sup>Optional</sup> <a name="replace_key_prefix_with_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyPrefixWithInput"></a>

```python
replace_key_prefix_with_input: str
```

- *Type:* str

---

##### `replace_key_with_input`<sup>Optional</sup> <a name="replace_key_with_input" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyWithInput"></a>

```python
replace_key_with_input: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `http_redirect_code`<sup>Required</sup> <a name="http_redirect_code" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.httpRedirectCode"></a>

```python
http_redirect_code: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `replace_key_prefix_with`<sup>Required</sup> <a name="replace_key_prefix_with" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyPrefixWith"></a>

```python
replace_key_prefix_with: str
```

- *Type:* str

---

##### `replace_key_with`<sup>Required</sup> <a name="replace_key_with" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyWith"></a>

```python
replace_key_with: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketWebsiteConfigurationRoutingRuleRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a>

---



