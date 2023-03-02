# `cloudwatchMetricStream` Submodule <a name="`cloudwatchMetricStream` Submodule" id="@cdktf/provider-aws.cloudwatchMetricStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricStream <a name="CloudwatchMetricStream" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream aws_cloudwatch_metric_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

new cloudwatchMetricStream.CloudwatchMetricStream(scope: Construct, id: string, config: CloudwatchMetricStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig">CloudwatchMetricStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig">CloudwatchMetricStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter">putExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter">putIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfiguration">putStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilter">resetExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilter">resetIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfiguration">resetStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putExcludeFilter` <a name="putExcludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter"></a>

```typescript
public putExcludeFilter(value: IResolvable | CloudwatchMetricStreamExcludeFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]

---

##### `putIncludeFilter` <a name="putIncludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter"></a>

```typescript
public putIncludeFilter(value: IResolvable | CloudwatchMetricStreamIncludeFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]

---

##### `putStatisticsConfiguration` <a name="putStatisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfiguration"></a>

```typescript
public putStatisticsConfiguration(value: IResolvable | CloudwatchMetricStreamStatisticsConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudwatchMetricStreamTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>

---

##### `resetExcludeFilter` <a name="resetExcludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilter"></a>

```typescript
public resetExcludeFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeFilter` <a name="resetIncludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilter"></a>

```typescript
public resetIncludeFilter(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetStatisticsConfiguration` <a name="resetStatisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfiguration"></a>

```typescript
public resetStatisticsConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

cloudwatchMetricStream.CloudwatchMetricStream.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilter">excludeFilter</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList">CloudwatchMetricStreamExcludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilter">includeFilter</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList">CloudwatchMetricStreamIncludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate">lastUpdateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfiguration">statisticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList">CloudwatchMetricStreamStatisticsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference">CloudwatchMetricStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilterInput">excludeFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput">firehoseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilterInput">includeFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationInput">statisticsConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn">firehoseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `excludeFilter`<sup>Required</sup> <a name="excludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilter"></a>

```typescript
public readonly excludeFilter: CloudwatchMetricStreamExcludeFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList">CloudwatchMetricStreamExcludeFilterList</a>

---

##### `includeFilter`<sup>Required</sup> <a name="includeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilter"></a>

```typescript
public readonly includeFilter: CloudwatchMetricStreamIncludeFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList">CloudwatchMetricStreamIncludeFilterList</a>

---

##### `lastUpdateDate`<sup>Required</sup> <a name="lastUpdateDate" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate"></a>

```typescript
public readonly lastUpdateDate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `statisticsConfiguration`<sup>Required</sup> <a name="statisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfiguration"></a>

```typescript
public readonly statisticsConfiguration: CloudwatchMetricStreamStatisticsConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList">CloudwatchMetricStreamStatisticsConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeouts"></a>

```typescript
public readonly timeouts: CloudwatchMetricStreamTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference">CloudwatchMetricStreamTimeoutsOutputReference</a>

---

##### `excludeFilterInput`<sup>Optional</sup> <a name="excludeFilterInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilterInput"></a>

```typescript
public readonly excludeFilterInput: IResolvable | CloudwatchMetricStreamExcludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]

---

##### `firehoseArnInput`<sup>Optional</sup> <a name="firehoseArnInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput"></a>

```typescript
public readonly firehoseArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeFilterInput`<sup>Optional</sup> <a name="includeFilterInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilterInput"></a>

```typescript
public readonly includeFilterInput: IResolvable | CloudwatchMetricStreamIncludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `statisticsConfigurationInput`<sup>Optional</sup> <a name="statisticsConfigurationInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationInput"></a>

```typescript
public readonly statisticsConfigurationInput: IResolvable | CloudwatchMetricStreamStatisticsConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CloudwatchMetricStreamTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a> | cdktf.IResolvable

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn"></a>

```typescript
public readonly firehoseArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricStreamConfig <a name="CloudwatchMetricStreamConfig" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

const cloudwatchMetricStreamConfig: cloudwatchMetricStream.CloudwatchMetricStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn">firehoseArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat">outputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilter">excludeFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]</code> | exclude_filter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#id CloudwatchMetricStream#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilter">includeFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]</code> | include_filter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name CloudwatchMetricStream#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfiguration">statisticsConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>[]</code> | statistics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn"></a>

```typescript
public readonly firehoseArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}.

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}.

---

##### `excludeFilter`<sup>Optional</sup> <a name="excludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilter"></a>

```typescript
public readonly excludeFilter: IResolvable | CloudwatchMetricStreamExcludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]

exclude_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#exclude_filter CloudwatchMetricStream#exclude_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#id CloudwatchMetricStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeFilter`<sup>Optional</sup> <a name="includeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilter"></a>

```typescript
public readonly includeFilter: IResolvable | CloudwatchMetricStreamIncludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]

include_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#include_filter CloudwatchMetricStream#include_filter}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name CloudwatchMetricStream#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}.

---

##### `statisticsConfiguration`<sup>Optional</sup> <a name="statisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfiguration"></a>

```typescript
public readonly statisticsConfiguration: IResolvable | CloudwatchMetricStreamStatisticsConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>[]

statistics_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#statistics_configuration CloudwatchMetricStream#statistics_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudwatchMetricStreamTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#timeouts CloudwatchMetricStream#timeouts}

---

### CloudwatchMetricStreamExcludeFilter <a name="CloudwatchMetricStreamExcludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

const cloudwatchMetricStreamExcludeFilter: cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamIncludeFilter <a name="CloudwatchMetricStreamIncludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

const cloudwatchMetricStreamIncludeFilter: cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamStatisticsConfiguration <a name="CloudwatchMetricStreamStatisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

const cloudwatchMetricStreamStatisticsConfiguration: cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.additionalStatistics">additionalStatistics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.includeMetric">includeMetric</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>[]</code> | include_metric block. |

---

##### `additionalStatistics`<sup>Required</sup> <a name="additionalStatistics" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.additionalStatistics"></a>

```typescript
public readonly additionalStatistics: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}.

---

##### `includeMetric`<sup>Required</sup> <a name="includeMetric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.includeMetric"></a>

```typescript
public readonly includeMetric: IResolvable | CloudwatchMetricStreamStatisticsConfigurationIncludeMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>[]

include_metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#include_metric CloudwatchMetricStream#include_metric}

---

### CloudwatchMetricStreamStatisticsConfigurationIncludeMetric <a name="CloudwatchMetricStreamStatisticsConfigurationIncludeMetric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

const cloudwatchMetricStreamStatisticsConfigurationIncludeMetric: cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamTimeouts <a name="CloudwatchMetricStreamTimeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

const cloudwatchMetricStreamTimeouts: cloudwatchMetricStream.CloudwatchMetricStreamTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#create CloudwatchMetricStream#create}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#delete CloudwatchMetricStream#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#update CloudwatchMetricStream#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#create CloudwatchMetricStream#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#delete CloudwatchMetricStream#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#update CloudwatchMetricStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricStreamExcludeFilterList <a name="CloudwatchMetricStreamExcludeFilterList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

new cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get"></a>

```typescript
public get(index: number): CloudwatchMetricStreamExcludeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamExcludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]

---


### CloudwatchMetricStreamExcludeFilterOutputReference <a name="CloudwatchMetricStreamExcludeFilterOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

new cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchMetricStreamExcludeFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a> | cdktf.IResolvable

---


### CloudwatchMetricStreamIncludeFilterList <a name="CloudwatchMetricStreamIncludeFilterList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

new cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get"></a>

```typescript
public get(index: number): CloudwatchMetricStreamIncludeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamIncludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]

---


### CloudwatchMetricStreamIncludeFilterOutputReference <a name="CloudwatchMetricStreamIncludeFilterOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

new cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchMetricStreamIncludeFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a> | cdktf.IResolvable

---


### CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList <a name="CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

new cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.get"></a>

```typescript
public get(index: number): CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamStatisticsConfigurationIncludeMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>[]

---


### CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

new cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchMetricStreamStatisticsConfigurationIncludeMetric | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a> | cdktf.IResolvable

---


### CloudwatchMetricStreamStatisticsConfigurationList <a name="CloudwatchMetricStreamStatisticsConfigurationList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

new cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.get"></a>

```typescript
public get(index: number): CloudwatchMetricStreamStatisticsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamStatisticsConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>[]

---


### CloudwatchMetricStreamStatisticsConfigurationOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

new cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.putIncludeMetric">putIncludeMetric</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludeMetric` <a name="putIncludeMetric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.putIncludeMetric"></a>

```typescript
public putIncludeMetric(value: IResolvable | CloudwatchMetricStreamStatisticsConfigurationIncludeMetric[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.putIncludeMetric.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetric">includeMetric</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList">CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatisticsInput">additionalStatisticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetricInput">includeMetricInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatistics">additionalStatistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeMetric`<sup>Required</sup> <a name="includeMetric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetric"></a>

```typescript
public readonly includeMetric: CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList">CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList</a>

---

##### `additionalStatisticsInput`<sup>Optional</sup> <a name="additionalStatisticsInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatisticsInput"></a>

```typescript
public readonly additionalStatisticsInput: string[];
```

- *Type:* string[]

---

##### `includeMetricInput`<sup>Optional</sup> <a name="includeMetricInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetricInput"></a>

```typescript
public readonly includeMetricInput: IResolvable | CloudwatchMetricStreamStatisticsConfigurationIncludeMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>[]

---

##### `additionalStatistics`<sup>Required</sup> <a name="additionalStatistics" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatistics"></a>

```typescript
public readonly additionalStatistics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchMetricStreamStatisticsConfiguration | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a> | cdktf.IResolvable

---


### CloudwatchMetricStreamTimeoutsOutputReference <a name="CloudwatchMetricStreamTimeoutsOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/provider-aws'

new cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchMetricStreamTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a> | cdktf.IResolvable

---



