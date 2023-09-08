# `data_aws_route53_resolver_query_log_config`

Refer to the Terraform Registory for docs: [`data_aws_route53_resolver_query_log_config`](https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config).

# `dataAwsRoute53ResolverQueryLogConfig` Submodule <a name="`dataAwsRoute53ResolverQueryLogConfig` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverQueryLogConfig <a name="DataAwsRoute53ResolverQueryLogConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config aws_route53_resolver_query_log_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v17/dataawsroute53resolverquerylogconfig"

dataawsroute53resolverquerylogconfig.NewDataAwsRoute53ResolverQueryLogConfig(scope Construct, id *string, config DataAwsRoute53ResolverQueryLogConfigConfig) DataAwsRoute53ResolverQueryLogConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig">DataAwsRoute53ResolverQueryLogConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig">DataAwsRoute53ResolverQueryLogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetResolverQueryLogConfigId">ResetResolverQueryLogConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetName"></a>

```go
func ResetName()
```

##### `ResetResolverQueryLogConfigId` <a name="ResetResolverQueryLogConfigId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetResolverQueryLogConfigId"></a>

```go
func ResetResolverQueryLogConfigId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v17/dataawsroute53resolverquerylogconfig"

dataawsroute53resolverquerylogconfig.DataAwsRoute53ResolverQueryLogConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v17/dataawsroute53resolverquerylogconfig"

dataawsroute53resolverquerylogconfig.DataAwsRoute53ResolverQueryLogConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v17/dataawsroute53resolverquerylogconfig"

dataawsroute53resolverquerylogconfig.DataAwsRoute53ResolverQueryLogConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList">DataAwsRoute53ResolverQueryLogConfigFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.shareStatus">ShareStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.resolverQueryLogConfigIdInput">ResolverQueryLogConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.resolverQueryLogConfigId">ResolverQueryLogConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.destinationArn"></a>

```go
func DestinationArn() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.filter"></a>

```go
func Filter() DataAwsRoute53ResolverQueryLogConfigFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList">DataAwsRoute53ResolverQueryLogConfigFilterList</a>

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `ShareStatus`<sup>Required</sup> <a name="ShareStatus" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.shareStatus"></a>

```go
func ShareStatus() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResolverQueryLogConfigIdInput`<sup>Optional</sup> <a name="ResolverQueryLogConfigIdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.resolverQueryLogConfigIdInput"></a>

```go
func ResolverQueryLogConfigIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResolverQueryLogConfigId`<sup>Required</sup> <a name="ResolverQueryLogConfigId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.resolverQueryLogConfigId"></a>

```go
func ResolverQueryLogConfigId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverQueryLogConfigConfig <a name="DataAwsRoute53ResolverQueryLogConfigConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v17/dataawsroute53resolverquerylogconfig"

&dataawsroute53resolverquerylogconfig.DataAwsRoute53ResolverQueryLogConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: interface{},
	Id: *string,
	Name: *string,
	ResolverQueryLogConfigId: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config#id DataAwsRoute53ResolverQueryLogConfig#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.resolverQueryLogConfigId">ResolverQueryLogConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config#resolver_query_log_config_id DataAwsRoute53ResolverQueryLogConfig#resolver_query_log_config_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config#tags DataAwsRoute53ResolverQueryLogConfig#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config#filter DataAwsRoute53ResolverQueryLogConfig#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config#id DataAwsRoute53ResolverQueryLogConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}.

---

##### `ResolverQueryLogConfigId`<sup>Optional</sup> <a name="ResolverQueryLogConfigId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.resolverQueryLogConfigId"></a>

```go
ResolverQueryLogConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config#resolver_query_log_config_id DataAwsRoute53ResolverQueryLogConfig#resolver_query_log_config_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config#tags DataAwsRoute53ResolverQueryLogConfig#tags}.

---

### DataAwsRoute53ResolverQueryLogConfigFilter <a name="DataAwsRoute53ResolverQueryLogConfigFilter" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v17/dataawsroute53resolverquerylogconfig"

&dataawsroute53resolverquerylogconfig.DataAwsRoute53ResolverQueryLogConfigFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config#values DataAwsRoute53ResolverQueryLogConfig#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/route53_resolver_query_log_config#values DataAwsRoute53ResolverQueryLogConfig#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53ResolverQueryLogConfigFilterList <a name="DataAwsRoute53ResolverQueryLogConfigFilterList" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v17/dataawsroute53resolverquerylogconfig"

dataawsroute53resolverquerylogconfig.NewDataAwsRoute53ResolverQueryLogConfigFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsRoute53ResolverQueryLogConfigFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.get"></a>

```go
func Get(index *f64) DataAwsRoute53ResolverQueryLogConfigFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsRoute53ResolverQueryLogConfigFilterOutputReference <a name="DataAwsRoute53ResolverQueryLogConfigFilterOutputReference" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v17/dataawsroute53resolverquerylogconfig"

dataawsroute53resolverquerylogconfig.NewDataAwsRoute53ResolverQueryLogConfigFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsRoute53ResolverQueryLogConfigFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



