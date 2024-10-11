# `elasticacheServerlessCache` Submodule <a name="`elasticacheServerlessCache` Submodule" id="@cdktf/provider-aws.elasticacheServerlessCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheServerlessCache <a name="ElasticacheServerlessCache" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache aws_elasticache_serverless_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

new elasticacheServerlessCache.ElasticacheServerlessCache(scope: Construct, id: string, config: ElasticacheServerlessCacheConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig">ElasticacheServerlessCacheConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig">ElasticacheServerlessCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits">putCacheUsageLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetCacheUsageLimits">resetCacheUsageLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDailySnapshotTime">resetDailySnapshotTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetMajorEngineVersion">resetMajorEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotArnsToRestore">resetSnapshotArnsToRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotRetentionLimit">resetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetUserGroupId">resetUserGroupId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCacheUsageLimits` <a name="putCacheUsageLimits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits"></a>

```typescript
public putCacheUsageLimits(value: IResolvable | ElasticacheServerlessCacheCacheUsageLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts"></a>

```typescript
public putTimeouts(value: ElasticacheServerlessCacheTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>

---

##### `resetCacheUsageLimits` <a name="resetCacheUsageLimits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetCacheUsageLimits"></a>

```typescript
public resetCacheUsageLimits(): void
```

##### `resetDailySnapshotTime` <a name="resetDailySnapshotTime" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDailySnapshotTime"></a>

```typescript
public resetDailySnapshotTime(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetMajorEngineVersion` <a name="resetMajorEngineVersion" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetMajorEngineVersion"></a>

```typescript
public resetMajorEngineVersion(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSnapshotArnsToRestore` <a name="resetSnapshotArnsToRestore" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotArnsToRestore"></a>

```typescript
public resetSnapshotArnsToRestore(): void
```

##### `resetSnapshotRetentionLimit` <a name="resetSnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotRetentionLimit"></a>

```typescript
public resetSnapshotRetentionLimit(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserGroupId` <a name="resetUserGroupId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetUserGroupId"></a>

```typescript
public resetUserGroupId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticacheServerlessCache resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ElasticacheServerlessCache resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticacheServerlessCache to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticacheServerlessCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElasticacheServerlessCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimits">cacheUsageLimits</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList">ElasticacheServerlessCacheCacheUsageLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList">ElasticacheServerlessCacheEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fullEngineVersion">fullEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.readerEndpoint">readerEndpoint</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList">ElasticacheServerlessCacheReaderEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference">ElasticacheServerlessCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimitsInput">cacheUsageLimitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTimeInput">dailySnapshotTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersionInput">majorEngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestoreInput">snapshotArnsToRestoreInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimitInput">snapshotRetentionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupIdInput">userGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTime">dailySnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersion">majorEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestore">snapshotArnsToRestore</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupId">userGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cacheUsageLimits`<sup>Required</sup> <a name="cacheUsageLimits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimits"></a>

```typescript
public readonly cacheUsageLimits: ElasticacheServerlessCacheCacheUsageLimitsList;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList">ElasticacheServerlessCacheCacheUsageLimitsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.endpoint"></a>

```typescript
public readonly endpoint: ElasticacheServerlessCacheEndpointList;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList">ElasticacheServerlessCacheEndpointList</a>

---

##### `fullEngineVersion`<sup>Required</sup> <a name="fullEngineVersion" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fullEngineVersion"></a>

```typescript
public readonly fullEngineVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `readerEndpoint`<sup>Required</sup> <a name="readerEndpoint" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.readerEndpoint"></a>

```typescript
public readonly readerEndpoint: ElasticacheServerlessCacheReaderEndpointList;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList">ElasticacheServerlessCacheReaderEndpointList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticacheServerlessCacheTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference">ElasticacheServerlessCacheTimeoutsOutputReference</a>

---

##### `cacheUsageLimitsInput`<sup>Optional</sup> <a name="cacheUsageLimitsInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimitsInput"></a>

```typescript
public readonly cacheUsageLimitsInput: IResolvable | ElasticacheServerlessCacheCacheUsageLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>[]

---

##### `dailySnapshotTimeInput`<sup>Optional</sup> <a name="dailySnapshotTimeInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTimeInput"></a>

```typescript
public readonly dailySnapshotTimeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `majorEngineVersionInput`<sup>Optional</sup> <a name="majorEngineVersionInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersionInput"></a>

```typescript
public readonly majorEngineVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `snapshotArnsToRestoreInput`<sup>Optional</sup> <a name="snapshotArnsToRestoreInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestoreInput"></a>

```typescript
public readonly snapshotArnsToRestoreInput: string[];
```

- *Type:* string[]

---

##### `snapshotRetentionLimitInput`<sup>Optional</sup> <a name="snapshotRetentionLimitInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimitInput"></a>

```typescript
public readonly snapshotRetentionLimitInput: number;
```

- *Type:* number

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ElasticacheServerlessCacheTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>

---

##### `userGroupIdInput`<sup>Optional</sup> <a name="userGroupIdInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupIdInput"></a>

```typescript
public readonly userGroupIdInput: string;
```

- *Type:* string

---

##### `dailySnapshotTime`<sup>Required</sup> <a name="dailySnapshotTime" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTime"></a>

```typescript
public readonly dailySnapshotTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersion"></a>

```typescript
public readonly majorEngineVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `snapshotArnsToRestore`<sup>Required</sup> <a name="snapshotArnsToRestore" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestore"></a>

```typescript
public readonly snapshotArnsToRestore: string[];
```

- *Type:* string[]

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="snapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userGroupId`<sup>Required</sup> <a name="userGroupId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupId"></a>

```typescript
public readonly userGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheServerlessCacheCacheUsageLimits <a name="ElasticacheServerlessCacheCacheUsageLimits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

const elasticacheServerlessCacheCacheUsageLimits: elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.dataStorage">dataStorage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>[]</code> | data_storage block. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.ecpuPerSecond">ecpuPerSecond</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>[]</code> | ecpu_per_second block. |

---

##### `dataStorage`<sup>Optional</sup> <a name="dataStorage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.dataStorage"></a>

```typescript
public readonly dataStorage: IResolvable | ElasticacheServerlessCacheCacheUsageLimitsDataStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>[]

data_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#data_storage ElasticacheServerlessCache#data_storage}

---

##### `ecpuPerSecond`<sup>Optional</sup> <a name="ecpuPerSecond" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.ecpuPerSecond"></a>

```typescript
public readonly ecpuPerSecond: IResolvable | ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>[]

ecpu_per_second block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#ecpu_per_second ElasticacheServerlessCache#ecpu_per_second}

---

### ElasticacheServerlessCacheCacheUsageLimitsDataStorage <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

const elasticacheServerlessCacheCacheUsageLimitsDataStorage: elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#unit ElasticacheServerlessCache#unit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.maximum">maximum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.minimum">minimum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#unit ElasticacheServerlessCache#unit}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}.

---

### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

const elasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond: elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.maximum">maximum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.minimum">minimum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}. |

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}.

---

### ElasticacheServerlessCacheConfig <a name="ElasticacheServerlessCacheConfig" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

const elasticacheServerlessCacheConfig: elasticacheServerlessCache.ElasticacheServerlessCacheConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.cacheUsageLimits">cacheUsageLimits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>[]</code> | cache_usage_limits block. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dailySnapshotTime">dailySnapshotTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.majorEngineVersion">majorEngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotArnsToRestore">snapshotArnsToRestore</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.userGroupId">userGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}.

---

##### `cacheUsageLimits`<sup>Optional</sup> <a name="cacheUsageLimits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.cacheUsageLimits"></a>

```typescript
public readonly cacheUsageLimits: IResolvable | ElasticacheServerlessCacheCacheUsageLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>[]

cache_usage_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#cache_usage_limits ElasticacheServerlessCache#cache_usage_limits}

---

##### `dailySnapshotTime`<sup>Optional</sup> <a name="dailySnapshotTime" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dailySnapshotTime"></a>

```typescript
public readonly dailySnapshotTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}.

---

##### `majorEngineVersion`<sup>Optional</sup> <a name="majorEngineVersion" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.majorEngineVersion"></a>

```typescript
public readonly majorEngineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}.

---

##### `snapshotArnsToRestore`<sup>Optional</sup> <a name="snapshotArnsToRestore" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotArnsToRestore"></a>

```typescript
public readonly snapshotArnsToRestore: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}.

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticacheServerlessCacheTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#timeouts ElasticacheServerlessCache#timeouts}

---

##### `userGroupId`<sup>Optional</sup> <a name="userGroupId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.userGroupId"></a>

```typescript
public readonly userGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}.

---

### ElasticacheServerlessCacheEndpoint <a name="ElasticacheServerlessCacheEndpoint" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

const elasticacheServerlessCacheEndpoint: elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint = { ... }
```


### ElasticacheServerlessCacheReaderEndpoint <a name="ElasticacheServerlessCacheReaderEndpoint" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

const elasticacheServerlessCacheReaderEndpoint: elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint = { ... }
```


### ElasticacheServerlessCacheTimeouts <a name="ElasticacheServerlessCacheTimeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

const elasticacheServerlessCacheTimeouts: elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#create ElasticacheServerlessCache#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#delete ElasticacheServerlessCache#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/elasticache_serverless_cache#update ElasticacheServerlessCache#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheServerlessCacheCacheUsageLimitsDataStorageList <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorageList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

new elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.get"></a>

```typescript
public get(index: number): ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheServerlessCacheCacheUsageLimitsDataStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>[]

---


### ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

new elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximumInput">maximumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimumInput">minimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: number;
```

- *Type:* number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheServerlessCacheCacheUsageLimitsDataStorage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>

---


### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

new elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.get"></a>

```typescript
public get(index: number): ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>[]

---


### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

new elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximumInput">maximumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimumInput">minimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: number;
```

- *Type:* number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: number;
```

- *Type:* number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>

---


### ElasticacheServerlessCacheCacheUsageLimitsList <a name="ElasticacheServerlessCacheCacheUsageLimitsList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

new elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.get"></a>

```typescript
public get(index: number): ElasticacheServerlessCacheCacheUsageLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheServerlessCacheCacheUsageLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>[]

---


### ElasticacheServerlessCacheCacheUsageLimitsOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

new elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage">putDataStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond">putEcpuPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetDataStorage">resetDataStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetEcpuPerSecond">resetEcpuPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataStorage` <a name="putDataStorage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage"></a>

```typescript
public putDataStorage(value: IResolvable | ElasticacheServerlessCacheCacheUsageLimitsDataStorage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>[]

---

##### `putEcpuPerSecond` <a name="putEcpuPerSecond" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond"></a>

```typescript
public putEcpuPerSecond(value: IResolvable | ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>[]

---

##### `resetDataStorage` <a name="resetDataStorage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetDataStorage"></a>

```typescript
public resetDataStorage(): void
```

##### `resetEcpuPerSecond` <a name="resetEcpuPerSecond" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetEcpuPerSecond"></a>

```typescript
public resetEcpuPerSecond(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorage">dataStorage</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList">ElasticacheServerlessCacheCacheUsageLimitsDataStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecond">ecpuPerSecond</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorageInput">dataStorageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecondInput">ecpuPerSecondInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStorage`<sup>Required</sup> <a name="dataStorage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorage"></a>

```typescript
public readonly dataStorage: ElasticacheServerlessCacheCacheUsageLimitsDataStorageList;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList">ElasticacheServerlessCacheCacheUsageLimitsDataStorageList</a>

---

##### `ecpuPerSecond`<sup>Required</sup> <a name="ecpuPerSecond" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecond"></a>

```typescript
public readonly ecpuPerSecond: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList</a>

---

##### `dataStorageInput`<sup>Optional</sup> <a name="dataStorageInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorageInput"></a>

```typescript
public readonly dataStorageInput: IResolvable | ElasticacheServerlessCacheCacheUsageLimitsDataStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>[]

---

##### `ecpuPerSecondInput`<sup>Optional</sup> <a name="ecpuPerSecondInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecondInput"></a>

```typescript
public readonly ecpuPerSecondInput: IResolvable | ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheServerlessCacheCacheUsageLimits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>

---


### ElasticacheServerlessCacheEndpointList <a name="ElasticacheServerlessCacheEndpointList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

new elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.get"></a>

```typescript
public get(index: number): ElasticacheServerlessCacheEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ElasticacheServerlessCacheEndpointOutputReference <a name="ElasticacheServerlessCacheEndpointOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

new elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheServerlessCacheEndpoint;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a>

---


### ElasticacheServerlessCacheReaderEndpointList <a name="ElasticacheServerlessCacheReaderEndpointList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

new elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.get"></a>

```typescript
public get(index: number): ElasticacheServerlessCacheReaderEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ElasticacheServerlessCacheReaderEndpointOutputReference <a name="ElasticacheServerlessCacheReaderEndpointOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

new elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheServerlessCacheReaderEndpoint;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a>

---


### ElasticacheServerlessCacheTimeoutsOutputReference <a name="ElasticacheServerlessCacheTimeoutsOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer"></a>

```typescript
import { elasticacheServerlessCache } from '@cdktf/provider-aws'

new elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheServerlessCacheTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>

---



