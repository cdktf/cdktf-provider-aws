# `wafv2RegexPatternSet` Submodule <a name="`wafv2RegexPatternSet` Submodule" id="@cdktf/provider-aws.wafv2RegexPatternSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2RegexPatternSet <a name="Wafv2RegexPatternSet" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set aws_wafv2_regex_pattern_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer"></a>

```typescript
import { wafv2RegexPatternSet } from '@cdktf/provider-aws'

new wafv2RegexPatternSet.Wafv2RegexPatternSet(scope: Construct, id: string, config: Wafv2RegexPatternSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig">Wafv2RegexPatternSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig">Wafv2RegexPatternSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.putRegularExpression">putRegularExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetRegularExpression">resetRegularExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRegularExpression` <a name="putRegularExpression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.putRegularExpression"></a>

```typescript
public putRegularExpression(value: IResolvable | Wafv2RegexPatternSetRegularExpression[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.putRegularExpression.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegularExpression` <a name="resetRegularExpression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetRegularExpression"></a>

```typescript
public resetRegularExpression(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isConstruct"></a>

```typescript
import { wafv2RegexPatternSet } from '@cdktf/provider-aws'

wafv2RegexPatternSet.Wafv2RegexPatternSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformElement"></a>

```typescript
import { wafv2RegexPatternSet } from '@cdktf/provider-aws'

wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformResource"></a>

```typescript
import { wafv2RegexPatternSet } from '@cdktf/provider-aws'

wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lockToken">lockToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpression">regularExpression</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList">Wafv2RegexPatternSetRegularExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpressionInput">regularExpressionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `lockToken`<sup>Required</sup> <a name="lockToken" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lockToken"></a>

```typescript
public readonly lockToken: string;
```

- *Type:* string

---

##### `regularExpression`<sup>Required</sup> <a name="regularExpression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpression"></a>

```typescript
public readonly regularExpression: Wafv2RegexPatternSetRegularExpressionList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList">Wafv2RegexPatternSetRegularExpressionList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regularExpressionInput`<sup>Optional</sup> <a name="regularExpressionInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpressionInput"></a>

```typescript
public readonly regularExpressionInput: IResolvable | Wafv2RegexPatternSetRegularExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>[]

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2RegexPatternSetConfig <a name="Wafv2RegexPatternSetConfig" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.Initializer"></a>

```typescript
import { wafv2RegexPatternSet } from '@cdktf/provider-aws'

const wafv2RegexPatternSetConfig: wafv2RegexPatternSet.Wafv2RegexPatternSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#name Wafv2RegexPatternSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#scope Wafv2RegexPatternSet#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#description Wafv2RegexPatternSet#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#id Wafv2RegexPatternSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.regularExpression">regularExpression</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>[]</code> | regular_expression block. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags_all Wafv2RegexPatternSet#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#name Wafv2RegexPatternSet#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#scope Wafv2RegexPatternSet#scope}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#description Wafv2RegexPatternSet#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#id Wafv2RegexPatternSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regularExpression`<sup>Optional</sup> <a name="regularExpression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.regularExpression"></a>

```typescript
public readonly regularExpression: IResolvable | Wafv2RegexPatternSetRegularExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>[]

regular_expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#regular_expression Wafv2RegexPatternSet#regular_expression}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags_all Wafv2RegexPatternSet#tags_all}.

---

### Wafv2RegexPatternSetRegularExpression <a name="Wafv2RegexPatternSetRegularExpression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression.Initializer"></a>

```typescript
import { wafv2RegexPatternSet } from '@cdktf/provider-aws'

const wafv2RegexPatternSetRegularExpression: wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression.property.regexString">regexString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#regex_string Wafv2RegexPatternSet#regex_string}. |

---

##### `regexString`<sup>Required</sup> <a name="regexString" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression.property.regexString"></a>

```typescript
public readonly regexString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#regex_string Wafv2RegexPatternSet#regex_string}.

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2RegexPatternSetRegularExpressionList <a name="Wafv2RegexPatternSetRegularExpressionList" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer"></a>

```typescript
import { wafv2RegexPatternSet } from '@cdktf/provider-aws'

new wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.get"></a>

```typescript
public get(index: number): Wafv2RegexPatternSetRegularExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RegexPatternSetRegularExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>[]

---


### Wafv2RegexPatternSetRegularExpressionOutputReference <a name="Wafv2RegexPatternSetRegularExpressionOutputReference" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer"></a>

```typescript
import { wafv2RegexPatternSet } from '@cdktf/provider-aws'

new wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.regexStringInput">regexStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.regexString">regexString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexStringInput`<sup>Optional</sup> <a name="regexStringInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.regexStringInput"></a>

```typescript
public readonly regexStringInput: string;
```

- *Type:* string

---

##### `regexString`<sup>Required</sup> <a name="regexString" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.regexString"></a>

```typescript
public readonly regexString: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RegexPatternSetRegularExpression | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a> | cdktf.IResolvable

---



