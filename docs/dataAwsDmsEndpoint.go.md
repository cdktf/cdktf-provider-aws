# `dataAwsDmsEndpoint` Submodule <a name="`dataAwsDmsEndpoint` Submodule" id="@cdktf/provider-aws.dataAwsDmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDmsEndpoint <a name="DataAwsDmsEndpoint" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/dms_endpoint aws_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpoint(scope Construct, id *string, config DataAwsDmsEndpointConfig) DataAwsDmsEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig">DataAwsDmsEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig">DataAwsDmsEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsDmsEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.DataAwsDmsEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.DataAwsDmsEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.DataAwsDmsEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.DataAwsDmsEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsDmsEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsDmsEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsDmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.elasticsearchSettings">ElasticsearchSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList">DataAwsDmsEndpointElasticsearchSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointArn">EndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.engineName">EngineName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.extraConnectionAttributes">ExtraConnectionAttributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.kafkaSettings">KafkaSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList">DataAwsDmsEndpointKafkaSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.kinesisSettings">KinesisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList">DataAwsDmsEndpointKinesisSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.mongodbSettings">MongodbSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList">DataAwsDmsEndpointMongodbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.postgresSettings">PostgresSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList">DataAwsDmsEndpointPostgresSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.redisSettings">RedisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList">DataAwsDmsEndpointRedisSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList">DataAwsDmsEndpointRedshiftSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.s3Settings">S3Settings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList">DataAwsDmsEndpointS3SettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.serviceAccessRole">ServiceAccessRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointIdInput">EndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `ElasticsearchSettings`<sup>Required</sup> <a name="ElasticsearchSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.elasticsearchSettings"></a>

```go
func ElasticsearchSettings() DataAwsDmsEndpointElasticsearchSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList">DataAwsDmsEndpointElasticsearchSettingsList</a>

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointArn"></a>

```go
func EndpointArn() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.engineName"></a>

```go
func EngineName() *string
```

- *Type:* *string

---

##### `ExtraConnectionAttributes`<sup>Required</sup> <a name="ExtraConnectionAttributes" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.extraConnectionAttributes"></a>

```go
func ExtraConnectionAttributes() *string
```

- *Type:* *string

---

##### `KafkaSettings`<sup>Required</sup> <a name="KafkaSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.kafkaSettings"></a>

```go
func KafkaSettings() DataAwsDmsEndpointKafkaSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList">DataAwsDmsEndpointKafkaSettingsList</a>

---

##### `KinesisSettings`<sup>Required</sup> <a name="KinesisSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.kinesisSettings"></a>

```go
func KinesisSettings() DataAwsDmsEndpointKinesisSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList">DataAwsDmsEndpointKinesisSettingsList</a>

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `MongodbSettings`<sup>Required</sup> <a name="MongodbSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.mongodbSettings"></a>

```go
func MongodbSettings() DataAwsDmsEndpointMongodbSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList">DataAwsDmsEndpointMongodbSettingsList</a>

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PostgresSettings`<sup>Required</sup> <a name="PostgresSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.postgresSettings"></a>

```go
func PostgresSettings() DataAwsDmsEndpointPostgresSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList">DataAwsDmsEndpointPostgresSettingsList</a>

---

##### `RedisSettings`<sup>Required</sup> <a name="RedisSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.redisSettings"></a>

```go
func RedisSettings() DataAwsDmsEndpointRedisSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList">DataAwsDmsEndpointRedisSettingsList</a>

---

##### `RedshiftSettings`<sup>Required</sup> <a name="RedshiftSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.redshiftSettings"></a>

```go
func RedshiftSettings() DataAwsDmsEndpointRedshiftSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList">DataAwsDmsEndpointRedshiftSettingsList</a>

---

##### `S3Settings`<sup>Required</sup> <a name="S3Settings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.s3Settings"></a>

```go
func S3Settings() DataAwsDmsEndpointS3SettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList">DataAwsDmsEndpointS3SettingsList</a>

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerArn`<sup>Required</sup> <a name="SecretsManagerArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.secretsManagerArn"></a>

```go
func SecretsManagerArn() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `ServiceAccessRole`<sup>Required</sup> <a name="ServiceAccessRole" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.serviceAccessRole"></a>

```go
func ServiceAccessRole() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointIdInput"></a>

```go
func EndpointIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDmsEndpointConfig <a name="DataAwsDmsEndpointConfig" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

&dataawsdmsendpoint.DataAwsDmsEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointId: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.endpointId">EndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/dms_endpoint#endpoint_id DataAwsDmsEndpoint#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/dms_endpoint#id DataAwsDmsEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/dms_endpoint#tags DataAwsDmsEndpoint#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.endpointId"></a>

```go
EndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/dms_endpoint#endpoint_id DataAwsDmsEndpoint#endpoint_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/dms_endpoint#id DataAwsDmsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/dms_endpoint#tags DataAwsDmsEndpoint#tags}.

---

### DataAwsDmsEndpointElasticsearchSettings <a name="DataAwsDmsEndpointElasticsearchSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

&dataawsdmsendpoint.DataAwsDmsEndpointElasticsearchSettings {

}
```


### DataAwsDmsEndpointKafkaSettings <a name="DataAwsDmsEndpointKafkaSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

&dataawsdmsendpoint.DataAwsDmsEndpointKafkaSettings {

}
```


### DataAwsDmsEndpointKinesisSettings <a name="DataAwsDmsEndpointKinesisSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

&dataawsdmsendpoint.DataAwsDmsEndpointKinesisSettings {

}
```


### DataAwsDmsEndpointMongodbSettings <a name="DataAwsDmsEndpointMongodbSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

&dataawsdmsendpoint.DataAwsDmsEndpointMongodbSettings {

}
```


### DataAwsDmsEndpointPostgresSettings <a name="DataAwsDmsEndpointPostgresSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

&dataawsdmsendpoint.DataAwsDmsEndpointPostgresSettings {

}
```


### DataAwsDmsEndpointRedisSettings <a name="DataAwsDmsEndpointRedisSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

&dataawsdmsendpoint.DataAwsDmsEndpointRedisSettings {

}
```


### DataAwsDmsEndpointRedshiftSettings <a name="DataAwsDmsEndpointRedshiftSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

&dataawsdmsendpoint.DataAwsDmsEndpointRedshiftSettings {

}
```


### DataAwsDmsEndpointS3Settings <a name="DataAwsDmsEndpointS3Settings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3Settings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

&dataawsdmsendpoint.DataAwsDmsEndpointS3Settings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDmsEndpointElasticsearchSettingsList <a name="DataAwsDmsEndpointElasticsearchSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointElasticsearchSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsDmsEndpointElasticsearchSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.get"></a>

```go
func Get(index *f64) DataAwsDmsEndpointElasticsearchSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsDmsEndpointElasticsearchSettingsOutputReference <a name="DataAwsDmsEndpointElasticsearchSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointElasticsearchSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsDmsEndpointElasticsearchSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">EndpointUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">FullLoadErrorPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettings">DataAwsDmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```go
func EndpointUri() *string
```

- *Type:* *string

---

##### `ErrorRetryDuration`<sup>Required</sup> <a name="ErrorRetryDuration" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```go
func ErrorRetryDuration() *f64
```

- *Type:* *f64

---

##### `FullLoadErrorPercentage`<sup>Required</sup> <a name="FullLoadErrorPercentage" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```go
func FullLoadErrorPercentage() *f64
```

- *Type:* *f64

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsDmsEndpointElasticsearchSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettings">DataAwsDmsEndpointElasticsearchSettings</a>

---


### DataAwsDmsEndpointKafkaSettingsList <a name="DataAwsDmsEndpointKafkaSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointKafkaSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsDmsEndpointKafkaSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.get"></a>

```go
func Get(index *f64) DataAwsDmsEndpointKafkaSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsDmsEndpointKafkaSettingsOutputReference <a name="DataAwsDmsEndpointKafkaSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointKafkaSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsDmsEndpointKafkaSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.broker">Broker</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">NoHexPrefix</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.saslPassword">SaslPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.saslUsername">SaslUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.securityProtocol">SecurityProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">SslClientCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">SslClientKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">SslClientKeyPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettings">DataAwsDmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Broker`<sup>Required</sup> <a name="Broker" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```go
func Broker() *string
```

- *Type:* *string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```go
func IncludeControlDetails() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```go
func IncludeNullAndEmpty() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```go
func IncludePartitionValue() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```go
func IncludeTableAlterOperations() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```go
func IncludeTransactionDetails() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```go
func MessageFormat() *string
```

- *Type:* *string

---

##### `MessageMaxBytes`<sup>Required</sup> <a name="MessageMaxBytes" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```go
func MessageMaxBytes() *f64
```

- *Type:* *f64

---

##### `NoHexPrefix`<sup>Required</sup> <a name="NoHexPrefix" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```go
func NoHexPrefix() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```go
func PartitionIncludeSchemaTable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SaslPassword`<sup>Required</sup> <a name="SaslPassword" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```go
func SaslPassword() *string
```

- *Type:* *string

---

##### `SaslUsername`<sup>Required</sup> <a name="SaslUsername" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.saslUsername"></a>

```go
func SaslUsername() *string
```

- *Type:* *string

---

##### `SecurityProtocol`<sup>Required</sup> <a name="SecurityProtocol" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```go
func SecurityProtocol() *string
```

- *Type:* *string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```go
func SslCaCertificateArn() *string
```

- *Type:* *string

---

##### `SslClientCertificateArn`<sup>Required</sup> <a name="SslClientCertificateArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```go
func SslClientCertificateArn() *string
```

- *Type:* *string

---

##### `SslClientKeyArn`<sup>Required</sup> <a name="SslClientKeyArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```go
func SslClientKeyArn() *string
```

- *Type:* *string

---

##### `SslClientKeyPassword`<sup>Required</sup> <a name="SslClientKeyPassword" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```go
func SslClientKeyPassword() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsDmsEndpointKafkaSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettings">DataAwsDmsEndpointKafkaSettings</a>

---


### DataAwsDmsEndpointKinesisSettingsList <a name="DataAwsDmsEndpointKinesisSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointKinesisSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsDmsEndpointKinesisSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.get"></a>

```go
func Get(index *f64) DataAwsDmsEndpointKinesisSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsDmsEndpointKinesisSettingsOutputReference <a name="DataAwsDmsEndpointKinesisSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointKinesisSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsDmsEndpointKinesisSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettings">DataAwsDmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```go
func IncludeControlDetails() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```go
func IncludeNullAndEmpty() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```go
func IncludePartitionValue() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```go
func IncludeTableAlterOperations() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```go
func IncludeTransactionDetails() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```go
func MessageFormat() *string
```

- *Type:* *string

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```go
func PartitionIncludeSchemaTable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsDmsEndpointKinesisSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettings">DataAwsDmsEndpointKinesisSettings</a>

---


### DataAwsDmsEndpointMongodbSettingsList <a name="DataAwsDmsEndpointMongodbSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointMongodbSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsDmsEndpointMongodbSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.get"></a>

```go
func Get(index *f64) DataAwsDmsEndpointMongodbSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsDmsEndpointMongodbSettingsOutputReference <a name="DataAwsDmsEndpointMongodbSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointMongodbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsDmsEndpointMongodbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.authMechanism">AuthMechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.authSource">AuthSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.extractDocId">ExtractDocId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.nestingLevel">NestingLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettings">DataAwsDmsEndpointMongodbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthMechanism`<sup>Required</sup> <a name="AuthMechanism" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.authMechanism"></a>

```go
func AuthMechanism() *string
```

- *Type:* *string

---

##### `AuthSource`<sup>Required</sup> <a name="AuthSource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.authSource"></a>

```go
func AuthSource() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `DocsToInvestigate`<sup>Required</sup> <a name="DocsToInvestigate" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate"></a>

```go
func DocsToInvestigate() *string
```

- *Type:* *string

---

##### `ExtractDocId`<sup>Required</sup> <a name="ExtractDocId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.extractDocId"></a>

```go
func ExtractDocId() *string
```

- *Type:* *string

---

##### `NestingLevel`<sup>Required</sup> <a name="NestingLevel" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.nestingLevel"></a>

```go
func NestingLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsDmsEndpointMongodbSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettings">DataAwsDmsEndpointMongodbSettings</a>

---


### DataAwsDmsEndpointPostgresSettingsList <a name="DataAwsDmsEndpointPostgresSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointPostgresSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsDmsEndpointPostgresSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.get"></a>

```go
func Get(index *f64) DataAwsDmsEndpointPostgresSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsDmsEndpointPostgresSettingsOutputReference <a name="DataAwsDmsEndpointPostgresSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointPostgresSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsDmsEndpointPostgresSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseName">BabelfishDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.captureDdls">CaptureDdls</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.databaseMode">DatabaseMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchema">DdlArtifactsSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.executeTimeout">ExecuteTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.heartbeatEnable">HeartbeatEnable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequency">HeartbeatFrequency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.heartbeatSchema">HeartbeatSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClob">MapJsonbAsClob</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAs">MapLongVarcharAs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.slotName">SlotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettings">DataAwsDmsEndpointPostgresSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.afterConnectScript"></a>

```go
func AfterConnectScript() *string
```

- *Type:* *string

---

##### `BabelfishDatabaseName`<sup>Required</sup> <a name="BabelfishDatabaseName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseName"></a>

```go
func BabelfishDatabaseName() *string
```

- *Type:* *string

---

##### `CaptureDdls`<sup>Required</sup> <a name="CaptureDdls" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.captureDdls"></a>

```go
func CaptureDdls() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DatabaseMode`<sup>Required</sup> <a name="DatabaseMode" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.databaseMode"></a>

```go
func DatabaseMode() *string
```

- *Type:* *string

---

##### `DdlArtifactsSchema`<sup>Required</sup> <a name="DdlArtifactsSchema" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchema"></a>

```go
func DdlArtifactsSchema() *string
```

- *Type:* *string

---

##### `ExecuteTimeout`<sup>Required</sup> <a name="ExecuteTimeout" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.executeTimeout"></a>

```go
func ExecuteTimeout() *f64
```

- *Type:* *f64

---

##### `FailTasksOnLobTruncation`<sup>Required</sup> <a name="FailTasksOnLobTruncation" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```go
func FailTasksOnLobTruncation() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HeartbeatEnable`<sup>Required</sup> <a name="HeartbeatEnable" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.heartbeatEnable"></a>

```go
func HeartbeatEnable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HeartbeatFrequency`<sup>Required</sup> <a name="HeartbeatFrequency" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequency"></a>

```go
func HeartbeatFrequency() *f64
```

- *Type:* *f64

---

##### `HeartbeatSchema`<sup>Required</sup> <a name="HeartbeatSchema" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.heartbeatSchema"></a>

```go
func HeartbeatSchema() *string
```

- *Type:* *string

---

##### `MapBooleanAsBoolean`<sup>Required</sup> <a name="MapBooleanAsBoolean" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```go
func MapBooleanAsBoolean() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MapJsonbAsClob`<sup>Required</sup> <a name="MapJsonbAsClob" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClob"></a>

```go
func MapJsonbAsClob() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MapLongVarcharAs`<sup>Required</sup> <a name="MapLongVarcharAs" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAs"></a>

```go
func MapLongVarcharAs() *string
```

- *Type:* *string

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `SlotName`<sup>Required</sup> <a name="SlotName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.slotName"></a>

```go
func SlotName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsDmsEndpointPostgresSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettings">DataAwsDmsEndpointPostgresSettings</a>

---


### DataAwsDmsEndpointRedisSettingsList <a name="DataAwsDmsEndpointRedisSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointRedisSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsDmsEndpointRedisSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.get"></a>

```go
func Get(index *f64) DataAwsDmsEndpointRedisSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsDmsEndpointRedisSettingsOutputReference <a name="DataAwsDmsEndpointRedisSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointRedisSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsDmsEndpointRedisSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.authPassword">AuthPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.authUserName">AuthUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">SslSecurityProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettings">DataAwsDmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthPassword`<sup>Required</sup> <a name="AuthPassword" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```go
func AuthPassword() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `AuthUserName`<sup>Required</sup> <a name="AuthUserName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```go
func AuthUserName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```go
func SslCaCertificateArn() *string
```

- *Type:* *string

---

##### `SslSecurityProtocol`<sup>Required</sup> <a name="SslSecurityProtocol" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```go
func SslSecurityProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsDmsEndpointRedisSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettings">DataAwsDmsEndpointRedisSettings</a>

---


### DataAwsDmsEndpointRedshiftSettingsList <a name="DataAwsDmsEndpointRedshiftSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointRedshiftSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsDmsEndpointRedshiftSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.get"></a>

```go
func Get(index *f64) DataAwsDmsEndpointRedshiftSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsDmsEndpointRedshiftSettingsOutputReference <a name="DataAwsDmsEndpointRedshiftSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointRedshiftSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsDmsEndpointRedshiftSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettings">DataAwsDmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```go
func BucketFolder() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```go
func EncryptionMode() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```go
func ServerSideEncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsDmsEndpointRedshiftSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettings">DataAwsDmsEndpointRedshiftSettings</a>

---


### DataAwsDmsEndpointS3SettingsList <a name="DataAwsDmsEndpointS3SettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointS3SettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsDmsEndpointS3SettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.get"></a>

```go
func Get(index *f64) DataAwsDmsEndpointS3SettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsDmsEndpointS3SettingsOutputReference <a name="DataAwsDmsEndpointS3SettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdmsendpoint"

dataawsdmsendpoint.NewDataAwsDmsEndpointS3SettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsDmsEndpointS3SettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.addColumnName">AddColumnName</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcPath">CdcPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvDelimiter">CsvDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvNullValue">CsvNullValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.dataFormat">DataFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.dataPageSize">DataPageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.enableStatistics">EnableStatistics</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.encodingType">EncodingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration">GlueCatalogGeneration</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.ignoreHeadersRow">IgnoreHeadersRow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.parquetVersion">ParquetVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.preserveTransactions">PreserveTransactions</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.rfc4180">Rfc4180</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.rowGroupLength">RowGroupLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.timestampColumnName">TimestampColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3Settings">DataAwsDmsEndpointS3Settings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddColumnName`<sup>Required</sup> <a name="AddColumnName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.addColumnName"></a>

```go
func AddColumnName() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```go
func BucketFolder() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CannedAclForObjects`<sup>Required</sup> <a name="CannedAclForObjects" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cannedAclForObjects"></a>

```go
func CannedAclForObjects() *string
```

- *Type:* *string

---

##### `CdcInsertsAndUpdates`<sup>Required</sup> <a name="CdcInsertsAndUpdates" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates"></a>

```go
func CdcInsertsAndUpdates() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CdcInsertsOnly`<sup>Required</sup> <a name="CdcInsertsOnly" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly"></a>

```go
func CdcInsertsOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CdcMaxBatchInterval`<sup>Required</sup> <a name="CdcMaxBatchInterval" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval"></a>

```go
func CdcMaxBatchInterval() *f64
```

- *Type:* *f64

---

##### `CdcMinFileSize`<sup>Required</sup> <a name="CdcMinFileSize" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcMinFileSize"></a>

```go
func CdcMinFileSize() *f64
```

- *Type:* *f64

---

##### `CdcPath`<sup>Required</sup> <a name="CdcPath" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcPath"></a>

```go
func CdcPath() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `CsvDelimiter`<sup>Required</sup> <a name="CsvDelimiter" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```go
func CsvDelimiter() *string
```

- *Type:* *string

---

##### `CsvNoSupValue`<sup>Required</sup> <a name="CsvNoSupValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvNoSupValue"></a>

```go
func CsvNoSupValue() *string
```

- *Type:* *string

---

##### `CsvNullValue`<sup>Required</sup> <a name="CsvNullValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvNullValue"></a>

```go
func CsvNullValue() *string
```

- *Type:* *string

---

##### `CsvRowDelimiter`<sup>Required</sup> <a name="CsvRowDelimiter" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```go
func CsvRowDelimiter() *string
```

- *Type:* *string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```go
func DataFormat() *string
```

- *Type:* *string

---

##### `DataPageSize`<sup>Required</sup> <a name="DataPageSize" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.dataPageSize"></a>

```go
func DataPageSize() *f64
```

- *Type:* *f64

---

##### `DatePartitionDelimiter`<sup>Required</sup> <a name="DatePartitionDelimiter" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter"></a>

```go
func DatePartitionDelimiter() *string
```

- *Type:* *string

---

##### `DatePartitionEnabled`<sup>Required</sup> <a name="DatePartitionEnabled" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```go
func DatePartitionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DatePartitionSequence`<sup>Required</sup> <a name="DatePartitionSequence" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.datePartitionSequence"></a>

```go
func DatePartitionSequence() *string
```

- *Type:* *string

---

##### `DictPageSizeLimit`<sup>Required</sup> <a name="DictPageSizeLimit" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit"></a>

```go
func DictPageSizeLimit() *f64
```

- *Type:* *f64

---

##### `EnableStatistics`<sup>Required</sup> <a name="EnableStatistics" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.enableStatistics"></a>

```go
func EnableStatistics() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EncodingType`<sup>Required</sup> <a name="EncodingType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.encodingType"></a>

```go
func EncodingType() *string
```

- *Type:* *string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```go
func EncryptionMode() *string
```

- *Type:* *string

---

##### `ExternalTableDefinition`<sup>Required</sup> <a name="ExternalTableDefinition" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```go
func ExternalTableDefinition() *string
```

- *Type:* *string

---

##### `GlueCatalogGeneration`<sup>Required</sup> <a name="GlueCatalogGeneration" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration"></a>

```go
func GlueCatalogGeneration() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IgnoreHeaderRows`<sup>Required</sup> <a name="IgnoreHeaderRows" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows"></a>

```go
func IgnoreHeaderRows() *f64
```

- *Type:* *f64

---

##### `IgnoreHeadersRow`<sup>Required</sup> <a name="IgnoreHeadersRow" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.ignoreHeadersRow"></a>

```go
func IgnoreHeadersRow() *f64
```

- *Type:* *f64

---

##### `IncludeOpForFullLoad`<sup>Required</sup> <a name="IncludeOpForFullLoad" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad"></a>

```go
func IncludeOpForFullLoad() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `ParquetTimestampInMillisecond`<sup>Required</sup> <a name="ParquetTimestampInMillisecond" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```go
func ParquetTimestampInMillisecond() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ParquetVersion`<sup>Required</sup> <a name="ParquetVersion" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```go
func ParquetVersion() *string
```

- *Type:* *string

---

##### `PreserveTransactions`<sup>Required</sup> <a name="PreserveTransactions" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.preserveTransactions"></a>

```go
func PreserveTransactions() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Rfc4180`<sup>Required</sup> <a name="Rfc4180" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.rfc4180"></a>

```go
func Rfc4180() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RowGroupLength`<sup>Required</sup> <a name="RowGroupLength" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.rowGroupLength"></a>

```go
func RowGroupLength() *f64
```

- *Type:* *f64

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```go
func ServerSideEncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `TimestampColumnName`<sup>Required</sup> <a name="TimestampColumnName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.timestampColumnName"></a>

```go
func TimestampColumnName() *string
```

- *Type:* *string

---

##### `UseCsvNoSupValue`<sup>Required</sup> <a name="UseCsvNoSupValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue"></a>

```go
func UseCsvNoSupValue() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp"></a>

```go
func UseTaskStartTimeForFullLoadTimestamp() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsDmsEndpointS3Settings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3Settings">DataAwsDmsEndpointS3Settings</a>

---



