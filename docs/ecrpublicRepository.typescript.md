# `ecrpublicRepository` Submodule <a name="`ecrpublicRepository` Submodule" id="@cdktf/provider-aws.ecrpublicRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrpublicRepository <a name="EcrpublicRepository" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository aws_ecrpublic_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer"></a>

```typescript
import { ecrpublicRepository } from '@cdktf/provider-aws'

new ecrpublicRepository.EcrpublicRepository(scope: Construct, id: string, config: EcrpublicRepositoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig">EcrpublicRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig">EcrpublicRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData">putCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetCatalogData">resetCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCatalogData` <a name="putCatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData"></a>

```typescript
public putCatalogData(value: EcrpublicRepositoryCatalogData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts"></a>

```typescript
public putTimeouts(value: EcrpublicRepositoryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>

---

##### `resetCatalogData` <a name="resetCatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetCatalogData"></a>

```typescript
public resetCatalogData(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct"></a>

```typescript
import { ecrpublicRepository } from '@cdktf/provider-aws'

ecrpublicRepository.EcrpublicRepository.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement"></a>

```typescript
import { ecrpublicRepository } from '@cdktf/provider-aws'

ecrpublicRepository.EcrpublicRepository.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource"></a>

```typescript
import { ecrpublicRepository } from '@cdktf/provider-aws'

ecrpublicRepository.EcrpublicRepository.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogData">catalogData</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference">EcrpublicRepositoryCatalogDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryUri">repositoryUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference">EcrpublicRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogDataInput">catalogDataInput</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `catalogData`<sup>Required</sup> <a name="catalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogData"></a>

```typescript
public readonly catalogData: EcrpublicRepositoryCatalogDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference">EcrpublicRepositoryCatalogDataOutputReference</a>

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `repositoryUri`<sup>Required</sup> <a name="repositoryUri" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryUri"></a>

```typescript
public readonly repositoryUri: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeouts"></a>

```typescript
public readonly timeouts: EcrpublicRepositoryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference">EcrpublicRepositoryTimeoutsOutputReference</a>

---

##### `catalogDataInput`<sup>Optional</sup> <a name="catalogDataInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogDataInput"></a>

```typescript
public readonly catalogDataInput: EcrpublicRepositoryCatalogData;
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: EcrpublicRepositoryTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a> | cdktf.IResolvable

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrpublicRepositoryCatalogData <a name="EcrpublicRepositoryCatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.Initializer"></a>

```typescript
import { ecrpublicRepository } from '@cdktf/provider-aws'

const ecrpublicRepositoryCatalogData: ecrpublicRepository.EcrpublicRepositoryCatalogData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.aboutText">aboutText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#about_text EcrpublicRepository#about_text}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.architectures">architectures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#architectures EcrpublicRepository#architectures}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#description EcrpublicRepository#description}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.logoImageBlob">logoImageBlob</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#logo_image_blob EcrpublicRepository#logo_image_blob}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.operatingSystems">operatingSystems</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#operating_systems EcrpublicRepository#operating_systems}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.usageText">usageText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#usage_text EcrpublicRepository#usage_text}. |

---

##### `aboutText`<sup>Optional</sup> <a name="aboutText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.aboutText"></a>

```typescript
public readonly aboutText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#about_text EcrpublicRepository#about_text}.

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#architectures EcrpublicRepository#architectures}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#description EcrpublicRepository#description}.

---

##### `logoImageBlob`<sup>Optional</sup> <a name="logoImageBlob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.logoImageBlob"></a>

```typescript
public readonly logoImageBlob: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#logo_image_blob EcrpublicRepository#logo_image_blob}.

---

##### `operatingSystems`<sup>Optional</sup> <a name="operatingSystems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.operatingSystems"></a>

```typescript
public readonly operatingSystems: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#operating_systems EcrpublicRepository#operating_systems}.

---

##### `usageText`<sup>Optional</sup> <a name="usageText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.usageText"></a>

```typescript
public readonly usageText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#usage_text EcrpublicRepository#usage_text}.

---

### EcrpublicRepositoryConfig <a name="EcrpublicRepositoryConfig" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.Initializer"></a>

```typescript
import { ecrpublicRepository } from '@cdktf/provider-aws'

const ecrpublicRepositoryConfig: ecrpublicRepository.EcrpublicRepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.repositoryName">repositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.catalogData">catalogData</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | catalog_data block. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}.

---

##### `catalogData`<sup>Optional</sup> <a name="catalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.catalogData"></a>

```typescript
public readonly catalogData: EcrpublicRepositoryCatalogData;
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

catalog_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#catalog_data EcrpublicRepository#catalog_data}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EcrpublicRepositoryTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#timeouts EcrpublicRepository#timeouts}

---

### EcrpublicRepositoryTimeouts <a name="EcrpublicRepositoryTimeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.Initializer"></a>

```typescript
import { ecrpublicRepository } from '@cdktf/provider-aws'

const ecrpublicRepositoryTimeouts: ecrpublicRepository.EcrpublicRepositoryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#delete EcrpublicRepository#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#delete EcrpublicRepository#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrpublicRepositoryCatalogDataOutputReference <a name="EcrpublicRepositoryCatalogDataOutputReference" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer"></a>

```typescript
import { ecrpublicRepository } from '@cdktf/provider-aws'

new ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetAboutText">resetAboutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetArchitectures">resetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetLogoImageBlob">resetLogoImageBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetOperatingSystems">resetOperatingSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetUsageText">resetUsageText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAboutText` <a name="resetAboutText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetAboutText"></a>

```typescript
public resetAboutText(): void
```

##### `resetArchitectures` <a name="resetArchitectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetArchitectures"></a>

```typescript
public resetArchitectures(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLogoImageBlob` <a name="resetLogoImageBlob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetLogoImageBlob"></a>

```typescript
public resetLogoImageBlob(): void
```

##### `resetOperatingSystems` <a name="resetOperatingSystems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetOperatingSystems"></a>

```typescript
public resetOperatingSystems(): void
```

##### `resetUsageText` <a name="resetUsageText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetUsageText"></a>

```typescript
public resetUsageText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutTextInput">aboutTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architecturesInput">architecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlobInput">logoImageBlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystemsInput">operatingSystemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageTextInput">usageTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutText">aboutText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architectures">architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlob">logoImageBlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystems">operatingSystems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageText">usageText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aboutTextInput`<sup>Optional</sup> <a name="aboutTextInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutTextInput"></a>

```typescript
public readonly aboutTextInput: string;
```

- *Type:* string

---

##### `architecturesInput`<sup>Optional</sup> <a name="architecturesInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architecturesInput"></a>

```typescript
public readonly architecturesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `logoImageBlobInput`<sup>Optional</sup> <a name="logoImageBlobInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlobInput"></a>

```typescript
public readonly logoImageBlobInput: string;
```

- *Type:* string

---

##### `operatingSystemsInput`<sup>Optional</sup> <a name="operatingSystemsInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystemsInput"></a>

```typescript
public readonly operatingSystemsInput: string[];
```

- *Type:* string[]

---

##### `usageTextInput`<sup>Optional</sup> <a name="usageTextInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageTextInput"></a>

```typescript
public readonly usageTextInput: string;
```

- *Type:* string

---

##### `aboutText`<sup>Required</sup> <a name="aboutText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutText"></a>

```typescript
public readonly aboutText: string;
```

- *Type:* string

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `logoImageBlob`<sup>Required</sup> <a name="logoImageBlob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlob"></a>

```typescript
public readonly logoImageBlob: string;
```

- *Type:* string

---

##### `operatingSystems`<sup>Required</sup> <a name="operatingSystems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystems"></a>

```typescript
public readonly operatingSystems: string[];
```

- *Type:* string[]

---

##### `usageText`<sup>Required</sup> <a name="usageText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageText"></a>

```typescript
public readonly usageText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcrpublicRepositoryCatalogData;
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---


### EcrpublicRepositoryTimeoutsOutputReference <a name="EcrpublicRepositoryTimeoutsOutputReference" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer"></a>

```typescript
import { ecrpublicRepository } from '@cdktf/provider-aws'

new ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcrpublicRepositoryTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a> | cdktf.IResolvable

---



