# `dataAwsEfsFileSystem` Submodule <a name="`dataAwsEfsFileSystem` Submodule" id="@cdktf/provider-aws.dataAwsEfsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEfsFileSystem <a name="DataAwsEfsFileSystem" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system aws_efs_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer"></a>

```typescript
import { dataAwsEfsFileSystem } from '@cdktf/provider-aws'

new dataAwsEfsFileSystem.DataAwsEfsFileSystem(scope: Construct, id: string, config?: DataAwsEfsFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig">DataAwsEfsFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig">DataAwsEfsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetCreationToken">resetCreationToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCreationToken` <a name="resetCreationToken" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetCreationToken"></a>

```typescript
public resetCreationToken(): void
```

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isConstruct"></a>

```typescript
import { dataAwsEfsFileSystem } from '@cdktf/provider-aws'

dataAwsEfsFileSystem.DataAwsEfsFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformElement"></a>

```typescript
import { dataAwsEfsFileSystem } from '@cdktf/provider-aws'

dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformDataSource"></a>

```typescript
import { dataAwsEfsFileSystem } from '@cdktf/provider-aws'

dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.availabilityZoneName">availabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.lifecyclePolicy">lifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList">DataAwsEfsFileSystemLifecyclePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.performanceMode">performanceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.provisionedThroughputInMibps">provisionedThroughputInMibps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.sizeInBytes">sizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.throughputMode">throughputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.creationTokenInput">creationTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.creationToken">creationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `availabilityZoneName`<sup>Required</sup> <a name="availabilityZoneName" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.availabilityZoneName"></a>

```typescript
public readonly availabilityZoneName: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `lifecyclePolicy`<sup>Required</sup> <a name="lifecyclePolicy" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.lifecyclePolicy"></a>

```typescript
public readonly lifecyclePolicy: DataAwsEfsFileSystemLifecyclePolicyList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList">DataAwsEfsFileSystemLifecyclePolicyList</a>

---

##### `performanceMode`<sup>Required</sup> <a name="performanceMode" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.performanceMode"></a>

```typescript
public readonly performanceMode: string;
```

- *Type:* string

---

##### `provisionedThroughputInMibps`<sup>Required</sup> <a name="provisionedThroughputInMibps" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.provisionedThroughputInMibps"></a>

```typescript
public readonly provisionedThroughputInMibps: number;
```

- *Type:* number

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: number;
```

- *Type:* number

---

##### `throughputMode`<sup>Required</sup> <a name="throughputMode" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.throughputMode"></a>

```typescript
public readonly throughputMode: string;
```

- *Type:* string

---

##### `creationTokenInput`<sup>Optional</sup> <a name="creationTokenInput" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.creationTokenInput"></a>

```typescript
public readonly creationTokenInput: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `creationToken`<sup>Required</sup> <a name="creationToken" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.creationToken"></a>

```typescript
public readonly creationToken: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEfsFileSystemConfig <a name="DataAwsEfsFileSystemConfig" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.Initializer"></a>

```typescript
import { dataAwsEfsFileSystem } from '@cdktf/provider-aws'

const dataAwsEfsFileSystemConfig: dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.creationToken">creationToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#creation_token DataAwsEfsFileSystem#creation_token}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#file_system_id DataAwsEfsFileSystem#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#id DataAwsEfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#tags DataAwsEfsFileSystem#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationToken`<sup>Optional</sup> <a name="creationToken" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.creationToken"></a>

```typescript
public readonly creationToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#creation_token DataAwsEfsFileSystem#creation_token}.

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#file_system_id DataAwsEfsFileSystem#file_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#id DataAwsEfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#tags DataAwsEfsFileSystem#tags}.

---

### DataAwsEfsFileSystemLifecyclePolicy <a name="DataAwsEfsFileSystemLifecyclePolicy" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy.Initializer"></a>

```typescript
import { dataAwsEfsFileSystem } from '@cdktf/provider-aws'

const dataAwsEfsFileSystemLifecyclePolicy: dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEfsFileSystemLifecyclePolicyList <a name="DataAwsEfsFileSystemLifecyclePolicyList" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer"></a>

```typescript
import { dataAwsEfsFileSystem } from '@cdktf/provider-aws'

new dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.get"></a>

```typescript
public get(index: number): DataAwsEfsFileSystemLifecyclePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEfsFileSystemLifecyclePolicyOutputReference <a name="DataAwsEfsFileSystemLifecyclePolicyOutputReference" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsEfsFileSystem } from '@cdktf/provider-aws'

new dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa">transitionToIa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass">transitionToPrimaryStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy">DataAwsEfsFileSystemLifecyclePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transitionToIa`<sup>Required</sup> <a name="transitionToIa" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa"></a>

```typescript
public readonly transitionToIa: string;
```

- *Type:* string

---

##### `transitionToPrimaryStorageClass`<sup>Required</sup> <a name="transitionToPrimaryStorageClass" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass"></a>

```typescript
public readonly transitionToPrimaryStorageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEfsFileSystemLifecyclePolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy">DataAwsEfsFileSystemLifecyclePolicy</a>

---



