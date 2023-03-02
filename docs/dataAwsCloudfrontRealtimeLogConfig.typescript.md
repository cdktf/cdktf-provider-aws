# `dataAwsCloudfrontRealtimeLogConfig` Submodule <a name="`dataAwsCloudfrontRealtimeLogConfig` Submodule" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontRealtimeLogConfig <a name="DataAwsCloudfrontRealtimeLogConfig" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

new dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig(scope: Construct, id: string, config: DataAwsCloudfrontRealtimeLogConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig">DataAwsCloudfrontRealtimeLogConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig">DataAwsCloudfrontRealtimeLogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isConstruct"></a>

```typescript
import { dataAwsCloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformElement"></a>

```typescript
import { dataAwsCloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsCloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList">DataAwsCloudfrontRealtimeLogConfigEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.fields">fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.samplingRate">samplingRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.endpoint"></a>

```typescript
public readonly endpoint: DataAwsCloudfrontRealtimeLogConfigEndpointList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList">DataAwsCloudfrontRealtimeLogConfigEndpointList</a>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontRealtimeLogConfigConfig <a name="DataAwsCloudfrontRealtimeLogConfigConfig" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

const dataAwsCloudfrontRealtimeLogConfigConfig: dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config#name DataAwsCloudfrontRealtimeLogConfig#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config#id DataAwsCloudfrontRealtimeLogConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config#name DataAwsCloudfrontRealtimeLogConfig#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config#id DataAwsCloudfrontRealtimeLogConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsCloudfrontRealtimeLogConfigEndpoint <a name="DataAwsCloudfrontRealtimeLogConfigEndpoint" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint.Initializer"></a>

```typescript
import { dataAwsCloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

const dataAwsCloudfrontRealtimeLogConfigEndpoint: dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint = { ... }
```


### DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig <a name="DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

const dataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig: dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList <a name="DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer"></a>

```typescript
import { dataAwsCloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

new dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference <a name="DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

new dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

---


### DataAwsCloudfrontRealtimeLogConfigEndpointList <a name="DataAwsCloudfrontRealtimeLogConfigEndpointList" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer"></a>

```typescript
import { dataAwsCloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

new dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference <a name="DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontRealtimeLogConfig } from '@cdktf/provider-aws'

new dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList">DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.streamType">streamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint">DataAwsCloudfrontRealtimeLogConfigEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="kinesisStreamConfig" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfig"></a>

```typescript
public readonly kinesisStreamConfig: DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList">DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList</a>

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.streamType"></a>

```typescript
public readonly streamType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontRealtimeLogConfigEndpoint;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint">DataAwsCloudfrontRealtimeLogConfigEndpoint</a>

---



