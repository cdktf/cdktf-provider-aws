# `kendraThesaurus` Submodule <a name="`kendraThesaurus` Submodule" id="@cdktf/provider-aws.kendraThesaurus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraThesaurus <a name="KendraThesaurus" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus aws_kendra_thesaurus}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.Initializer"></a>

```typescript
import { kendraThesaurus } from '@cdktf/provider-aws'

new kendraThesaurus.KendraThesaurus(scope: Construct, id: string, config: KendraThesaurusConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig">KendraThesaurusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig">KendraThesaurusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.putSourceS3Path">putSourceS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSourceS3Path` <a name="putSourceS3Path" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.putSourceS3Path"></a>

```typescript
public putSourceS3Path(value: KendraThesaurusSourceS3Path): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.putSourceS3Path.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3Path">KendraThesaurusSourceS3Path</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.putTimeouts"></a>

```typescript
public putTimeouts(value: KendraThesaurusTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts">KendraThesaurusTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.isConstruct"></a>

```typescript
import { kendraThesaurus } from '@cdktf/provider-aws'

kendraThesaurus.KendraThesaurus.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.isTerraformElement"></a>

```typescript
import { kendraThesaurus } from '@cdktf/provider-aws'

kendraThesaurus.KendraThesaurus.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.isTerraformResource"></a>

```typescript
import { kendraThesaurus } from '@cdktf/provider-aws'

kendraThesaurus.KendraThesaurus.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.sourceS3Path">sourceS3Path</a></code> | <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference">KendraThesaurusSourceS3PathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.thesaurusId">thesaurusId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference">KendraThesaurusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.indexIdInput">indexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.sourceS3PathInput">sourceS3PathInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3Path">KendraThesaurusSourceS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts">KendraThesaurusTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `sourceS3Path`<sup>Required</sup> <a name="sourceS3Path" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.sourceS3Path"></a>

```typescript
public readonly sourceS3Path: KendraThesaurusSourceS3PathOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference">KendraThesaurusSourceS3PathOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `thesaurusId`<sup>Required</sup> <a name="thesaurusId" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.thesaurusId"></a>

```typescript
public readonly thesaurusId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.timeouts"></a>

```typescript
public readonly timeouts: KendraThesaurusTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference">KendraThesaurusTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.indexIdInput"></a>

```typescript
public readonly indexIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `sourceS3PathInput`<sup>Optional</sup> <a name="sourceS3PathInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.sourceS3PathInput"></a>

```typescript
public readonly sourceS3PathInput: KendraThesaurusSourceS3Path;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3Path">KendraThesaurusSourceS3Path</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: KendraThesaurusTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts">KendraThesaurusTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurus.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KendraThesaurusConfig <a name="KendraThesaurusConfig" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.Initializer"></a>

```typescript
import { kendraThesaurus } from '@cdktf/provider-aws'

const kendraThesaurusConfig: kendraThesaurus.KendraThesaurusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.indexId">indexId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#index_id KendraThesaurus#index_id}. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#name KendraThesaurus#name}. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#role_arn KendraThesaurus#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.sourceS3Path">sourceS3Path</a></code> | <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3Path">KendraThesaurusSourceS3Path</a></code> | source_s3_path block. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#description KendraThesaurus#description}. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#id KendraThesaurus#id}. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#tags KendraThesaurus#tags}. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#tags_all KendraThesaurus#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts">KendraThesaurusTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#index_id KendraThesaurus#index_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#name KendraThesaurus#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#role_arn KendraThesaurus#role_arn}.

---

##### `sourceS3Path`<sup>Required</sup> <a name="sourceS3Path" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.sourceS3Path"></a>

```typescript
public readonly sourceS3Path: KendraThesaurusSourceS3Path;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3Path">KendraThesaurusSourceS3Path</a>

source_s3_path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#source_s3_path KendraThesaurus#source_s3_path}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#description KendraThesaurus#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#id KendraThesaurus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#tags KendraThesaurus#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#tags_all KendraThesaurus#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KendraThesaurusTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts">KendraThesaurusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#timeouts KendraThesaurus#timeouts}

---

### KendraThesaurusSourceS3Path <a name="KendraThesaurusSourceS3Path" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3Path"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3Path.Initializer"></a>

```typescript
import { kendraThesaurus } from '@cdktf/provider-aws'

const kendraThesaurusSourceS3Path: kendraThesaurus.KendraThesaurusSourceS3Path = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3Path.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#bucket KendraThesaurus#bucket}. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3Path.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#key KendraThesaurus#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3Path.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#bucket KendraThesaurus#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3Path.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#key KendraThesaurus#key}.

---

### KendraThesaurusTimeouts <a name="KendraThesaurusTimeouts" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts.Initializer"></a>

```typescript
import { kendraThesaurus } from '@cdktf/provider-aws'

const kendraThesaurusTimeouts: kendraThesaurus.KendraThesaurusTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#create KendraThesaurus#create}. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#delete KendraThesaurus#delete}. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#update KendraThesaurus#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#create KendraThesaurus#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#delete KendraThesaurus#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_thesaurus#update KendraThesaurus#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraThesaurusSourceS3PathOutputReference <a name="KendraThesaurusSourceS3PathOutputReference" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.Initializer"></a>

```typescript
import { kendraThesaurus } from '@cdktf/provider-aws'

new kendraThesaurus.KendraThesaurusSourceS3PathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3Path">KendraThesaurusSourceS3Path</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3PathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraThesaurusSourceS3Path;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusSourceS3Path">KendraThesaurusSourceS3Path</a>

---


### KendraThesaurusTimeoutsOutputReference <a name="KendraThesaurusTimeoutsOutputReference" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.Initializer"></a>

```typescript
import { kendraThesaurus } from '@cdktf/provider-aws'

new kendraThesaurus.KendraThesaurusTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts">KendraThesaurusTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KendraThesaurusTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kendraThesaurus.KendraThesaurusTimeouts">KendraThesaurusTimeouts</a> | cdktf.IResolvable

---



