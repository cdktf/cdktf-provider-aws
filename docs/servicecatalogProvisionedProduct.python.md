# `servicecatalogProvisionedProduct` Submodule <a name="`servicecatalogProvisionedProduct` Submodule" id="@cdktf/provider-aws.servicecatalogProvisionedProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProvisionedProduct <a name="ServicecatalogProvisionedProduct" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product aws_servicecatalog_provisioned_product}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct(
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
  accept_language: str = None,
  id: str = None,
  ignore_errors: typing.Union[bool, IResolvable] = None,
  notification_arns: typing.List[str] = None,
  path_id: str = None,
  path_name: str = None,
  product_id: str = None,
  product_name: str = None,
  provisioning_artifact_id: str = None,
  provisioning_artifact_name: str = None,
  provisioning_parameters: typing.Union[IResolvable, typing.List[ServicecatalogProvisionedProductProvisioningParameters]] = None,
  retain_physical_resources: typing.Union[bool, IResolvable] = None,
  stack_set_provisioning_preferences: ServicecatalogProvisionedProductStackSetProvisioningPreferences = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: ServicecatalogProvisionedProductTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#name ServicecatalogProvisionedProduct#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accept_language ServicecatalogProvisionedProduct#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#id ServicecatalogProvisionedProduct#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.ignoreErrors">ignore_errors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.notificationArns">notification_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#notification_arns ServicecatalogProvisionedProduct#notification_arns}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.pathId">path_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_id ServicecatalogProvisionedProduct#path_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.pathName">path_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_name ServicecatalogProvisionedProduct#path_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_id ServicecatalogProvisionedProduct#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.productName">product_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_name ServicecatalogProvisionedProduct#product_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.provisioningArtifactId">provisioning_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.provisioningArtifactName">provisioning_artifact_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.provisioningParameters">provisioning_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>]]</code> | provisioning_parameters block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.retainPhysicalResources">retain_physical_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.stackSetProvisioningPreferences">stack_set_provisioning_preferences</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a></code> | stack_set_provisioning_preferences block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags ServicecatalogProvisionedProduct#tags}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags_all ServicecatalogProvisionedProduct#tags_all}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#name ServicecatalogProvisionedProduct#name}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accept_language ServicecatalogProvisionedProduct#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#id ServicecatalogProvisionedProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_errors`<sup>Optional</sup> <a name="ignore_errors" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.ignoreErrors"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}.

---

##### `notification_arns`<sup>Optional</sup> <a name="notification_arns" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.notificationArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#notification_arns ServicecatalogProvisionedProduct#notification_arns}.

---

##### `path_id`<sup>Optional</sup> <a name="path_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.pathId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_id ServicecatalogProvisionedProduct#path_id}.

---

##### `path_name`<sup>Optional</sup> <a name="path_name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.pathName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_name ServicecatalogProvisionedProduct#path_name}.

---

##### `product_id`<sup>Optional</sup> <a name="product_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_id ServicecatalogProvisionedProduct#product_id}.

---

##### `product_name`<sup>Optional</sup> <a name="product_name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.productName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_name ServicecatalogProvisionedProduct#product_name}.

---

##### `provisioning_artifact_id`<sup>Optional</sup> <a name="provisioning_artifact_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.provisioningArtifactId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}.

---

##### `provisioning_artifact_name`<sup>Optional</sup> <a name="provisioning_artifact_name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.provisioningArtifactName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}.

---

##### `provisioning_parameters`<sup>Optional</sup> <a name="provisioning_parameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.provisioningParameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>]]

provisioning_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_parameters ServicecatalogProvisionedProduct#provisioning_parameters}

---

##### `retain_physical_resources`<sup>Optional</sup> <a name="retain_physical_resources" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.retainPhysicalResources"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}.

---

##### `stack_set_provisioning_preferences`<sup>Optional</sup> <a name="stack_set_provisioning_preferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.stackSetProvisioningPreferences"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

stack_set_provisioning_preferences block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#stack_set_provisioning_preferences ServicecatalogProvisionedProduct#stack_set_provisioning_preferences}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags ServicecatalogProvisionedProduct#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags_all ServicecatalogProvisionedProduct#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#timeouts ServicecatalogProvisionedProduct#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putProvisioningParameters">put_provisioning_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences">put_stack_set_provisioning_preferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetIgnoreErrors">reset_ignore_errors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetNotificationArns">reset_notification_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathId">reset_path_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathName">reset_path_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductId">reset_product_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductName">reset_product_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactId">reset_provisioning_artifact_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactName">reset_provisioning_artifact_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningParameters">reset_provisioning_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetRetainPhysicalResources">reset_retain_physical_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetStackSetProvisioningPreferences">reset_stack_set_provisioning_preferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provisioning_parameters` <a name="put_provisioning_parameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putProvisioningParameters"></a>

```python
def put_provisioning_parameters(
  value: typing.Union[IResolvable, typing.List[ServicecatalogProvisionedProductProvisioningParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putProvisioningParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>]]

---

##### `put_stack_set_provisioning_preferences` <a name="put_stack_set_provisioning_preferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences"></a>

```python
def put_stack_set_provisioning_preferences(
  accounts: typing.List[str] = None,
  failure_tolerance_count: typing.Union[int, float] = None,
  failure_tolerance_percentage: typing.Union[int, float] = None,
  max_concurrency_count: typing.Union[int, float] = None,
  max_concurrency_percentage: typing.Union[int, float] = None,
  regions: typing.List[str] = None
) -> None
```

###### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences.parameter.accounts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accounts ServicecatalogProvisionedProduct#accounts}.

---

###### `failure_tolerance_count`<sup>Optional</sup> <a name="failure_tolerance_count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences.parameter.failureToleranceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}.

---

###### `failure_tolerance_percentage`<sup>Optional</sup> <a name="failure_tolerance_percentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences.parameter.failureTolerancePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}.

---

###### `max_concurrency_count`<sup>Optional</sup> <a name="max_concurrency_count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences.parameter.maxConcurrencyCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}.

---

###### `max_concurrency_percentage`<sup>Optional</sup> <a name="max_concurrency_percentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences.parameter.maxConcurrencyPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}.

---

###### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences.parameter.regions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#regions ServicecatalogProvisionedProduct#regions}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#create ServicecatalogProvisionedProduct#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#delete ServicecatalogProvisionedProduct#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#read ServicecatalogProvisionedProduct#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#update ServicecatalogProvisionedProduct#update}.

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_errors` <a name="reset_ignore_errors" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetIgnoreErrors"></a>

```python
def reset_ignore_errors() -> None
```

##### `reset_notification_arns` <a name="reset_notification_arns" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetNotificationArns"></a>

```python
def reset_notification_arns() -> None
```

##### `reset_path_id` <a name="reset_path_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathId"></a>

```python
def reset_path_id() -> None
```

##### `reset_path_name` <a name="reset_path_name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathName"></a>

```python
def reset_path_name() -> None
```

##### `reset_product_id` <a name="reset_product_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductId"></a>

```python
def reset_product_id() -> None
```

##### `reset_product_name` <a name="reset_product_name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductName"></a>

```python
def reset_product_name() -> None
```

##### `reset_provisioning_artifact_id` <a name="reset_provisioning_artifact_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactId"></a>

```python
def reset_provisioning_artifact_id() -> None
```

##### `reset_provisioning_artifact_name` <a name="reset_provisioning_artifact_name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactName"></a>

```python
def reset_provisioning_artifact_name() -> None
```

##### `reset_provisioning_parameters` <a name="reset_provisioning_parameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningParameters"></a>

```python
def reset_provisioning_parameters() -> None
```

##### `reset_retain_physical_resources` <a name="reset_retain_physical_resources" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetRetainPhysicalResources"></a>

```python
def reset_retain_physical_resources() -> None
```

##### `reset_stack_set_provisioning_preferences` <a name="reset_stack_set_provisioning_preferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetStackSetProvisioningPreferences"></a>

```python
def reset_stack_set_provisioning_preferences() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cloudwatchDashboardNames">cloudwatch_dashboard_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastProvisioningRecordId">last_provisioning_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastRecordId">last_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastSuccessfulProvisioningRecordId">last_successful_provisioning_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.launchRoleArn">launch_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.outputs">outputs</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList">ServicecatalogProvisionedProductOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParameters">provisioning_parameters</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList">ServicecatalogProvisionedProductProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferences">stack_set_provisioning_preferences</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference">ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference">ServicecatalogProvisionedProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrorsInput">ignore_errors_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArnsInput">notification_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathIdInput">path_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathNameInput">path_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productNameInput">product_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactIdInput">provisioning_artifact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactNameInput">provisioning_artifact_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParametersInput">provisioning_parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResourcesInput">retain_physical_resources_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferencesInput">stack_set_provisioning_preferences_input</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrors">ignore_errors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArns">notification_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathId">path_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathName">path_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productName">product_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactId">provisioning_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactName">provisioning_artifact_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResources">retain_physical_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cloudwatch_dashboard_names`<sup>Required</sup> <a name="cloudwatch_dashboard_names" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cloudwatchDashboardNames"></a>

```python
cloudwatch_dashboard_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `last_provisioning_record_id`<sup>Required</sup> <a name="last_provisioning_record_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastProvisioningRecordId"></a>

```python
last_provisioning_record_id: str
```

- *Type:* str

---

##### `last_record_id`<sup>Required</sup> <a name="last_record_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastRecordId"></a>

```python
last_record_id: str
```

- *Type:* str

---

##### `last_successful_provisioning_record_id`<sup>Required</sup> <a name="last_successful_provisioning_record_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastSuccessfulProvisioningRecordId"></a>

```python
last_successful_provisioning_record_id: str
```

- *Type:* str

---

##### `launch_role_arn`<sup>Required</sup> <a name="launch_role_arn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.launchRoleArn"></a>

```python
launch_role_arn: str
```

- *Type:* str

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.outputs"></a>

```python
outputs: ServicecatalogProvisionedProductOutputsList
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList">ServicecatalogProvisionedProductOutputsList</a>

---

##### `provisioning_parameters`<sup>Required</sup> <a name="provisioning_parameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParameters"></a>

```python
provisioning_parameters: ServicecatalogProvisionedProductProvisioningParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList">ServicecatalogProvisionedProductProvisioningParametersList</a>

---

##### `stack_set_provisioning_preferences`<sup>Required</sup> <a name="stack_set_provisioning_preferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferences"></a>

```python
stack_set_provisioning_preferences: ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference">ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeouts"></a>

```python
timeouts: ServicecatalogProvisionedProductTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference">ServicecatalogProvisionedProductTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_errors_input`<sup>Optional</sup> <a name="ignore_errors_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrorsInput"></a>

```python
ignore_errors_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_arns_input`<sup>Optional</sup> <a name="notification_arns_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArnsInput"></a>

```python
notification_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_id_input`<sup>Optional</sup> <a name="path_id_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathIdInput"></a>

```python
path_id_input: str
```

- *Type:* str

---

##### `path_name_input`<sup>Optional</sup> <a name="path_name_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathNameInput"></a>

```python
path_name_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `product_name_input`<sup>Optional</sup> <a name="product_name_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productNameInput"></a>

```python
product_name_input: str
```

- *Type:* str

---

##### `provisioning_artifact_id_input`<sup>Optional</sup> <a name="provisioning_artifact_id_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactIdInput"></a>

```python
provisioning_artifact_id_input: str
```

- *Type:* str

---

##### `provisioning_artifact_name_input`<sup>Optional</sup> <a name="provisioning_artifact_name_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactNameInput"></a>

```python
provisioning_artifact_name_input: str
```

- *Type:* str

---

##### `provisioning_parameters_input`<sup>Optional</sup> <a name="provisioning_parameters_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParametersInput"></a>

```python
provisioning_parameters_input: typing.Union[IResolvable, typing.List[ServicecatalogProvisionedProductProvisioningParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>]]

---

##### `retain_physical_resources_input`<sup>Optional</sup> <a name="retain_physical_resources_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResourcesInput"></a>

```python
retain_physical_resources_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `stack_set_provisioning_preferences_input`<sup>Optional</sup> <a name="stack_set_provisioning_preferences_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferencesInput"></a>

```python
stack_set_provisioning_preferences_input: ServicecatalogProvisionedProductStackSetProvisioningPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ServicecatalogProvisionedProductTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>, cdktf.IResolvable]

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_errors`<sup>Required</sup> <a name="ignore_errors" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrors"></a>

```python
ignore_errors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_arns`<sup>Required</sup> <a name="notification_arns" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArns"></a>

```python
notification_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_id`<sup>Required</sup> <a name="path_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathId"></a>

```python
path_id: str
```

- *Type:* str

---

##### `path_name`<sup>Required</sup> <a name="path_name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathName"></a>

```python
path_name: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `product_name`<sup>Required</sup> <a name="product_name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productName"></a>

```python
product_name: str
```

- *Type:* str

---

##### `provisioning_artifact_id`<sup>Required</sup> <a name="provisioning_artifact_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactId"></a>

```python
provisioning_artifact_id: str
```

- *Type:* str

---

##### `provisioning_artifact_name`<sup>Required</sup> <a name="provisioning_artifact_name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactName"></a>

```python
provisioning_artifact_name: str
```

- *Type:* str

---

##### `retain_physical_resources`<sup>Required</sup> <a name="retain_physical_resources" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResources"></a>

```python
retain_physical_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProvisionedProductConfig <a name="ServicecatalogProvisionedProductConfig" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  accept_language: str = None,
  id: str = None,
  ignore_errors: typing.Union[bool, IResolvable] = None,
  notification_arns: typing.List[str] = None,
  path_id: str = None,
  path_name: str = None,
  product_id: str = None,
  product_name: str = None,
  provisioning_artifact_id: str = None,
  provisioning_artifact_name: str = None,
  provisioning_parameters: typing.Union[IResolvable, typing.List[ServicecatalogProvisionedProductProvisioningParameters]] = None,
  retain_physical_resources: typing.Union[bool, IResolvable] = None,
  stack_set_provisioning_preferences: ServicecatalogProvisionedProductStackSetProvisioningPreferences = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: ServicecatalogProvisionedProductTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#name ServicecatalogProvisionedProduct#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accept_language ServicecatalogProvisionedProduct#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#id ServicecatalogProvisionedProduct#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.ignoreErrors">ignore_errors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.notificationArns">notification_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#notification_arns ServicecatalogProvisionedProduct#notification_arns}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathId">path_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_id ServicecatalogProvisionedProduct#path_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathName">path_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_name ServicecatalogProvisionedProduct#path_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_id ServicecatalogProvisionedProduct#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productName">product_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_name ServicecatalogProvisionedProduct#product_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactId">provisioning_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactName">provisioning_artifact_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningParameters">provisioning_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>]]</code> | provisioning_parameters block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.retainPhysicalResources">retain_physical_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.stackSetProvisioningPreferences">stack_set_provisioning_preferences</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a></code> | stack_set_provisioning_preferences block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags ServicecatalogProvisionedProduct#tags}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags_all ServicecatalogProvisionedProduct#tags_all}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#name ServicecatalogProvisionedProduct#name}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accept_language ServicecatalogProvisionedProduct#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#id ServicecatalogProvisionedProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_errors`<sup>Optional</sup> <a name="ignore_errors" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.ignoreErrors"></a>

```python
ignore_errors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}.

---

##### `notification_arns`<sup>Optional</sup> <a name="notification_arns" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.notificationArns"></a>

```python
notification_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#notification_arns ServicecatalogProvisionedProduct#notification_arns}.

---

##### `path_id`<sup>Optional</sup> <a name="path_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathId"></a>

```python
path_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_id ServicecatalogProvisionedProduct#path_id}.

---

##### `path_name`<sup>Optional</sup> <a name="path_name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathName"></a>

```python
path_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#path_name ServicecatalogProvisionedProduct#path_name}.

---

##### `product_id`<sup>Optional</sup> <a name="product_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_id ServicecatalogProvisionedProduct#product_id}.

---

##### `product_name`<sup>Optional</sup> <a name="product_name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productName"></a>

```python
product_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#product_name ServicecatalogProvisionedProduct#product_name}.

---

##### `provisioning_artifact_id`<sup>Optional</sup> <a name="provisioning_artifact_id" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactId"></a>

```python
provisioning_artifact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}.

---

##### `provisioning_artifact_name`<sup>Optional</sup> <a name="provisioning_artifact_name" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactName"></a>

```python
provisioning_artifact_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}.

---

##### `provisioning_parameters`<sup>Optional</sup> <a name="provisioning_parameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningParameters"></a>

```python
provisioning_parameters: typing.Union[IResolvable, typing.List[ServicecatalogProvisionedProductProvisioningParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>]]

provisioning_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#provisioning_parameters ServicecatalogProvisionedProduct#provisioning_parameters}

---

##### `retain_physical_resources`<sup>Optional</sup> <a name="retain_physical_resources" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.retainPhysicalResources"></a>

```python
retain_physical_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}.

---

##### `stack_set_provisioning_preferences`<sup>Optional</sup> <a name="stack_set_provisioning_preferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.stackSetProvisioningPreferences"></a>

```python
stack_set_provisioning_preferences: ServicecatalogProvisionedProductStackSetProvisioningPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

stack_set_provisioning_preferences block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#stack_set_provisioning_preferences ServicecatalogProvisionedProduct#stack_set_provisioning_preferences}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags ServicecatalogProvisionedProduct#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#tags_all ServicecatalogProvisionedProduct#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.timeouts"></a>

```python
timeouts: ServicecatalogProvisionedProductTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#timeouts ServicecatalogProvisionedProduct#timeouts}

---

### ServicecatalogProvisionedProductOutputs <a name="ServicecatalogProvisionedProductOutputs" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputs()
```


### ServicecatalogProvisionedProductProvisioningParameters <a name="ServicecatalogProvisionedProductProvisioningParameters" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters(
  key: str,
  use_previous_value: typing.Union[bool, IResolvable] = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#key ServicecatalogProvisionedProduct#key}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.usePreviousValue">use_previous_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#use_previous_value ServicecatalogProvisionedProduct#use_previous_value}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#value ServicecatalogProvisionedProduct#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#key ServicecatalogProvisionedProduct#key}.

---

##### `use_previous_value`<sup>Optional</sup> <a name="use_previous_value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.usePreviousValue"></a>

```python
use_previous_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#use_previous_value ServicecatalogProvisionedProduct#use_previous_value}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#value ServicecatalogProvisionedProduct#value}.

---

### ServicecatalogProvisionedProductStackSetProvisioningPreferences <a name="ServicecatalogProvisionedProductStackSetProvisioningPreferences" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences(
  accounts: typing.List[str] = None,
  failure_tolerance_count: typing.Union[int, float] = None,
  failure_tolerance_percentage: typing.Union[int, float] = None,
  max_concurrency_count: typing.Union[int, float] = None,
  max_concurrency_percentage: typing.Union[int, float] = None,
  regions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accounts ServicecatalogProvisionedProduct#accounts}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureToleranceCount">failure_tolerance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureTolerancePercentage">failure_tolerance_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyCount">max_concurrency_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyPercentage">max_concurrency_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.regions">regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#regions ServicecatalogProvisionedProduct#regions}. |

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#accounts ServicecatalogProvisionedProduct#accounts}.

---

##### `failure_tolerance_count`<sup>Optional</sup> <a name="failure_tolerance_count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureToleranceCount"></a>

```python
failure_tolerance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}.

---

##### `failure_tolerance_percentage`<sup>Optional</sup> <a name="failure_tolerance_percentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureTolerancePercentage"></a>

```python
failure_tolerance_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}.

---

##### `max_concurrency_count`<sup>Optional</sup> <a name="max_concurrency_count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyCount"></a>

```python
max_concurrency_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}.

---

##### `max_concurrency_percentage`<sup>Optional</sup> <a name="max_concurrency_percentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyPercentage"></a>

```python
max_concurrency_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#regions ServicecatalogProvisionedProduct#regions}.

---

### ServicecatalogProvisionedProductTimeouts <a name="ServicecatalogProvisionedProductTimeouts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#create ServicecatalogProvisionedProduct#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#delete ServicecatalogProvisionedProduct#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#read ServicecatalogProvisionedProduct#read}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#update ServicecatalogProvisionedProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#create ServicecatalogProvisionedProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#delete ServicecatalogProvisionedProduct#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#read ServicecatalogProvisionedProduct#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product#update ServicecatalogProvisionedProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProvisionedProductOutputsList <a name="ServicecatalogProvisionedProductOutputsList" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicecatalogProvisionedProductOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ServicecatalogProvisionedProductOutputsOutputReference <a name="ServicecatalogProvisionedProductOutputsOutputReference" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputs">ServicecatalogProvisionedProductOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputsOutputReference.property.internalValue"></a>

```python
internal_value: ServicecatalogProvisionedProductOutputs
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductOutputs">ServicecatalogProvisionedProductOutputs</a>

---


### ServicecatalogProvisionedProductProvisioningParametersList <a name="ServicecatalogProvisionedProductProvisioningParametersList" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicecatalogProvisionedProductProvisioningParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServicecatalogProvisionedProductProvisioningParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>]]

---


### ServicecatalogProvisionedProductProvisioningParametersOutputReference <a name="ServicecatalogProvisionedProductProvisioningParametersOutputReference" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetUsePreviousValue">reset_use_previous_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_previous_value` <a name="reset_use_previous_value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetUsePreviousValue"></a>

```python
def reset_use_previous_value() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValueInput">use_previous_value_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValue">use_previous_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `use_previous_value_input`<sup>Optional</sup> <a name="use_previous_value_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValueInput"></a>

```python
use_previous_value_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `use_previous_value`<sup>Required</sup> <a name="use_previous_value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValue"></a>

```python
use_previous_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ServicecatalogProvisionedProductProvisioningParameters, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>, cdktf.IResolvable]

---


### ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference <a name="ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetAccounts">reset_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureToleranceCount">reset_failure_tolerance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureTolerancePercentage">reset_failure_tolerance_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyCount">reset_max_concurrency_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyPercentage">reset_max_concurrency_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetRegions">reset_regions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accounts` <a name="reset_accounts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetAccounts"></a>

```python
def reset_accounts() -> None
```

##### `reset_failure_tolerance_count` <a name="reset_failure_tolerance_count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureToleranceCount"></a>

```python
def reset_failure_tolerance_count() -> None
```

##### `reset_failure_tolerance_percentage` <a name="reset_failure_tolerance_percentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```python
def reset_failure_tolerance_percentage() -> None
```

##### `reset_max_concurrency_count` <a name="reset_max_concurrency_count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyCount"></a>

```python
def reset_max_concurrency_count() -> None
```

##### `reset_max_concurrency_percentage` <a name="reset_max_concurrency_percentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyPercentage"></a>

```python
def reset_max_concurrency_percentage() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetRegions"></a>

```python
def reset_regions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accountsInput">accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCountInput">failure_tolerance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentageInput">failure_tolerance_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCountInput">max_concurrency_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentageInput">max_concurrency_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCount">failure_tolerance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentage">failure_tolerance_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCount">max_concurrency_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentage">max_concurrency_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accounts_input`<sup>Optional</sup> <a name="accounts_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accountsInput"></a>

```python
accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `failure_tolerance_count_input`<sup>Optional</sup> <a name="failure_tolerance_count_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCountInput"></a>

```python
failure_tolerance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_tolerance_percentage_input`<sup>Optional</sup> <a name="failure_tolerance_percentage_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```python
failure_tolerance_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrency_count_input`<sup>Optional</sup> <a name="max_concurrency_count_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCountInput"></a>

```python
max_concurrency_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrency_percentage_input`<sup>Optional</sup> <a name="max_concurrency_percentage_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentageInput"></a>

```python
max_concurrency_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `failure_tolerance_count`<sup>Required</sup> <a name="failure_tolerance_count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCount"></a>

```python
failure_tolerance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_tolerance_percentage`<sup>Required</sup> <a name="failure_tolerance_percentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentage"></a>

```python
failure_tolerance_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrency_count`<sup>Required</sup> <a name="max_concurrency_count" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCount"></a>

```python
max_concurrency_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrency_percentage`<sup>Required</sup> <a name="max_concurrency_percentage" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentage"></a>

```python
max_concurrency_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.internalValue"></a>

```python
internal_value: ServicecatalogProvisionedProductStackSetProvisioningPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

---


### ServicecatalogProvisionedProductTimeoutsOutputReference <a name="ServicecatalogProvisionedProductTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import servicecatalog_provisioned_product

servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ServicecatalogProvisionedProductTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>, cdktf.IResolvable]

---



