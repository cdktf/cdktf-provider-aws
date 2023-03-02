# `codepipeline` Submodule <a name="`codepipeline` Submodule" id="@cdktf/provider-aws.codepipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Codepipeline <a name="Codepipeline" id="@cdktf/provider-aws.codepipeline.Codepipeline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline aws_codepipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.Codepipeline(scope: Construct, id: string, config: CodepipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig">CodepipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig">CodepipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putArtifactStore">putArtifactStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putStage">putStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.Codepipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codepipeline.Codepipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codepipeline.Codepipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codepipeline.Codepipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codepipeline.Codepipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codepipeline.Codepipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codepipeline.Codepipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putArtifactStore` <a name="putArtifactStore" id="@cdktf/provider-aws.codepipeline.Codepipeline.putArtifactStore"></a>

```typescript
public putArtifactStore(value: IResolvable | CodepipelineArtifactStore[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putArtifactStore.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]

---

##### `putStage` <a name="putStage" id="@cdktf/provider-aws.codepipeline.Codepipeline.putStage"></a>

```typescript
public putStage(value: IResolvable | CodepipelineStage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putStage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codepipeline.Codepipeline.isConstruct"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

codepipeline.Codepipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipeline.Codepipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformElement"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

codepipeline.Codepipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformResource"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

codepipeline.Codepipeline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStore">artifactStore</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList">CodepipelineArtifactStoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.stage">stage</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList">CodepipelineStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStoreInput">artifactStoreInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.stageInput">stageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `artifactStore`<sup>Required</sup> <a name="artifactStore" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStore"></a>

```typescript
public readonly artifactStore: CodepipelineArtifactStoreList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList">CodepipelineArtifactStoreList</a>

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.stage"></a>

```typescript
public readonly stage: CodepipelineStageList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList">CodepipelineStageList</a>

---

##### `artifactStoreInput`<sup>Optional</sup> <a name="artifactStoreInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStoreInput"></a>

```typescript
public readonly artifactStoreInput: IResolvable | CodepipelineArtifactStore[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.stageInput"></a>

```typescript
public readonly stageInput: IResolvable | CodepipelineStage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineArtifactStore <a name="CodepipelineArtifactStore" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineArtifactStore: codepipeline.CodepipelineArtifactStore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#location Codepipeline#location}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#type Codepipeline#type}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#region Codepipeline#region}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#location Codepipeline#location}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#type Codepipeline#type}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: CodepipelineArtifactStoreEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#encryption_key Codepipeline#encryption_key}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#region Codepipeline#region}.

---

### CodepipelineArtifactStoreEncryptionKey <a name="CodepipelineArtifactStoreEncryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineArtifactStoreEncryptionKey: codepipeline.CodepipelineArtifactStoreEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#id Codepipeline#id}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#type Codepipeline#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#type Codepipeline#type}.

---

### CodepipelineConfig <a name="CodepipelineConfig" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineConfig: codepipeline.CodepipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.artifactStore">artifactStore</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]</code> | artifact_store block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.stage">stage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]</code> | stage block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#id Codepipeline#id}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#tags Codepipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#tags_all Codepipeline#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactStore`<sup>Required</sup> <a name="artifactStore" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.artifactStore"></a>

```typescript
public readonly artifactStore: IResolvable | CodepipelineArtifactStore[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]

artifact_store block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#artifact_store Codepipeline#artifact_store}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#name Codepipeline#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.stage"></a>

```typescript
public readonly stage: IResolvable | CodepipelineStage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]

stage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#stage Codepipeline#stage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#tags Codepipeline#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#tags_all Codepipeline#tags_all}.

---

### CodepipelineStage <a name="CodepipelineStage" id="@cdktf/provider-aws.codepipeline.CodepipelineStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStage: codepipeline.CodepipelineStage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.action">action</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#name Codepipeline#name}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.action"></a>

```typescript
public readonly action: IResolvable | CodepipelineStageAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#action Codepipeline#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#name Codepipeline#name}.

---

### CodepipelineStageAction <a name="CodepipelineStageAction" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

const codepipelineStageAction: codepipeline.CodepipelineStageAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#category Codepipeline#category}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#owner Codepipeline#owner}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#provider Codepipeline#provider}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#version Codepipeline#version}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#configuration Codepipeline#configuration}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.inputArtifacts">inputArtifacts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#input_artifacts Codepipeline#input_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#namespace Codepipeline#namespace}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.outputArtifacts">outputArtifacts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#output_artifacts Codepipeline#output_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#region Codepipeline#region}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.runOrder">runOrder</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#run_order Codepipeline#run_order}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#category Codepipeline#category}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#name Codepipeline#name}.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#owner Codepipeline#owner}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#provider Codepipeline#provider}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#version Codepipeline#version}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#configuration Codepipeline#configuration}.

---

##### `inputArtifacts`<sup>Optional</sup> <a name="inputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#input_artifacts Codepipeline#input_artifacts}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#namespace Codepipeline#namespace}.

---

##### `outputArtifacts`<sup>Optional</sup> <a name="outputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.outputArtifacts"></a>

```typescript
public readonly outputArtifacts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#output_artifacts Codepipeline#output_artifacts}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#region Codepipeline#region}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `runOrder`<sup>Optional</sup> <a name="runOrder" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.runOrder"></a>

```typescript
public readonly runOrder: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline#run_order Codepipeline#run_order}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineArtifactStoreEncryptionKeyOutputReference <a name="CodepipelineArtifactStoreEncryptionKeyOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineArtifactStoreEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

---


### CodepipelineArtifactStoreList <a name="CodepipelineArtifactStoreList" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineArtifactStoreList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.get"></a>

```typescript
public get(index: number): CodepipelineArtifactStoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineArtifactStore[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>[]

---


### CodepipelineArtifactStoreOutputReference <a name="CodepipelineArtifactStoreOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineArtifactStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey"></a>

```typescript
public putEncryptionKey(value: CodepipelineArtifactStoreEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

---

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference">CodepipelineArtifactStoreEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: CodepipelineArtifactStoreEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference">CodepipelineArtifactStoreEncryptionKeyOutputReference</a>

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: CodepipelineArtifactStoreEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineArtifactStore | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a> | cdktf.IResolvable

---


### CodepipelineStageActionList <a name="CodepipelineStageActionList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.get"></a>

```typescript
public get(index: number): CodepipelineStageActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineStageAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]

---


### CodepipelineStageActionOutputReference <a name="CodepipelineStageActionOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetInputArtifacts">resetInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetOutputArtifacts">resetOutputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRunOrder">resetRunOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetInputArtifacts` <a name="resetInputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetInputArtifacts"></a>

```typescript
public resetInputArtifacts(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOutputArtifacts` <a name="resetOutputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetOutputArtifacts"></a>

```typescript
public resetOutputArtifacts(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetRunOrder` <a name="resetRunOrder" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRunOrder"></a>

```typescript
public resetRunOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configurationInput">configurationInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifactsInput">inputArtifactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifactsInput">outputArtifactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrderInput">runOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configuration">configuration</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifacts">outputArtifacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrder">runOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configurationInput"></a>

```typescript
public readonly configurationInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputArtifactsInput`<sup>Optional</sup> <a name="inputArtifactsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifactsInput"></a>

```typescript
public readonly inputArtifactsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `outputArtifactsInput`<sup>Optional</sup> <a name="outputArtifactsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifactsInput"></a>

```typescript
public readonly outputArtifactsInput: string[];
```

- *Type:* string[]

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `runOrderInput`<sup>Optional</sup> <a name="runOrderInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrderInput"></a>

```typescript
public readonly runOrderInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configuration"></a>

```typescript
public readonly configuration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `outputArtifacts`<sup>Required</sup> <a name="outputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifacts"></a>

```typescript
public readonly outputArtifacts: string[];
```

- *Type:* string[]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `runOrder`<sup>Required</sup> <a name="runOrder" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrder"></a>

```typescript
public readonly runOrder: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineStageAction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a> | cdktf.IResolvable

---


### CodepipelineStageList <a name="CodepipelineStageList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.get"></a>

```typescript
public get(index: number): CodepipelineStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineStage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>[]

---


### CodepipelineStageOutputReference <a name="CodepipelineStageOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer"></a>

```typescript
import { codepipeline } from '@cdktf/provider-aws'

new codepipeline.CodepipelineStageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putAction">putAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putAction"></a>

```typescript
public putAction(value: IResolvable | CodepipelineStageAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList">CodepipelineStageActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.actionInput">actionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.action"></a>

```typescript
public readonly action: CodepipelineStageActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList">CodepipelineStageActionList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | CodepipelineStageAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineStage | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a> | cdktf.IResolvable

---



